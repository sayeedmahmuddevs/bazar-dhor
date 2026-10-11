import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

      <h1 className="text-7xl font-bold text-amber-400">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mt-2">
        {`This page doesn't exist. Let's get you back to the library.`}
      </p>

      <Link
        href="/"
        className="mt-6 px-5 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300"
      >
        Go Home
      </Link>

    </div>
  );
}
