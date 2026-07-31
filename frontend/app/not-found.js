import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="mb-6 text-gray-500">Could not find requested resource</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold">
        Return Home
      </Link>
    </div>
  );
}
