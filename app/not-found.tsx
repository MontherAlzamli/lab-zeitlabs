import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-display text-h1 text-brand-primary">404</h1>
      <p className="text-body text-neutral-500">Page not found.</p>
      <Link href="/" className="text-brand-primary underline">
        Go home
      </Link>
    </main>
  );
}
