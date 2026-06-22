from datetime import datetime, timezone
import importlib
import sys

import pytest
from fastapi import HTTPException, status
from pydantic import ValidationError


def load_server_without_mongo(monkeypatch):
    monkeypatch.delenv("MONGO_URL", raising=False)
    monkeypatch.delenv("DB_NAME", raising=False)
    sys.modules.pop("backend.server", None)
    return importlib.import_module("backend.server")


def test_missing_mongo_configuration_returns_503(monkeypatch):
    server = load_server_without_mongo(monkeypatch)

    with pytest.raises(HTTPException) as exc_info:
        server.get_status_collection()

    assert exc_info.value.status_code == status.HTTP_503_SERVICE_UNAVAILABLE


def test_client_name_is_trimmed_and_bounded(monkeypatch):
    server = load_server_without_mongo(monkeypatch)

    payload = server.StatusCheckCreate(client_name="  Browser  ")
    assert payload.client_name == "Browser"

    with pytest.raises(ValidationError):
        server.StatusCheckCreate(client_name="  ")

    with pytest.raises(ValidationError):
        server.StatusCheckCreate(client_name="x" * 101)


def test_parse_timestamp_handles_legacy_strings(monkeypatch):
    server = load_server_without_mongo(monkeypatch)

    parsed = server.parse_timestamp("2024-01-02T03:04:05Z")
    assert parsed == datetime(2024, 1, 2, 3, 4, 5, tzinfo=timezone.utc)

    invalid = server.parse_timestamp("not-a-date")
    assert isinstance(invalid, datetime)
    assert invalid.tzinfo is not None
