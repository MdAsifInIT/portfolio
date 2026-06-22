from fastapi import FastAPI, APIRouter, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, ConfigDict, Field, field_validator
from typing import List
import uuid
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from pymongo.errors import PyMongoError


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')
client = AsyncIOMotorClient(mongo_url) if mongo_url and db_name else None
db = client[db_name] if client is not None and db_name else None

if db is None:
    logger.warning("MongoDB is not configured; /api/status endpoints will return 503.")

@asynccontextmanager
async def lifespan(_app: FastAPI):
    yield
    if client is not None:
        client.close()


# Create the main app without a prefix
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str = Field(min_length=1, max_length=100)
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(min_length=1, max_length=100)

    @field_validator("client_name")
    @classmethod
    def normalize_client_name(cls, value: str) -> str:
        normalized = value.strip()
        if not normalized:
            raise ValueError("client_name is required")
        return normalized


def get_status_collection():
    if db is None:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Status storage is not configured",
        )

    return db.status_checks


def parse_timestamp(value):
    if isinstance(value, datetime):
        return value if value.tzinfo else value.replace(tzinfo=timezone.utc)

    if isinstance(value, str):
        try:
            normalized = value.replace("Z", "+00:00")
            parsed = datetime.fromisoformat(normalized)
            return parsed if parsed.tzinfo else parsed.replace(tzinfo=timezone.utc)
        except ValueError:
            logger.warning("Ignoring invalid status timestamp: %s", value)

    return datetime.now(timezone.utc)


def parse_cors_origins():
    raw_origins = os.environ.get('CORS_ORIGINS', '*')
    origins = [origin.strip() for origin in raw_origins.split(',') if origin.strip()]
    return origins or ['*']

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    try:
        await get_status_collection().insert_one(doc)
    except PyMongoError as exc:
        logger.exception("Failed to create status check")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Status storage is unavailable",
        ) from exc

    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    try:
        # Exclude MongoDB's _id field from the query results
        status_checks = await get_status_collection().find({}, {"_id": 0}).to_list(1000)
    except PyMongoError as exc:
        logger.exception("Failed to fetch status checks")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Status storage is unavailable",
        ) from exc
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        check['timestamp'] = parse_timestamp(check.get('timestamp'))
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials='*' not in parse_cors_origins(),
    allow_origins=parse_cors_origins(),
    allow_methods=["*"],
    allow_headers=["*"],
)
