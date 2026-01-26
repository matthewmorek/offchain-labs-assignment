import Link from "next/link";

export default async function RootPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <nav className="flex flex-col gap-4 text-xl font-bold">
        <Link href="/task-1" className="rounded-full bg-black/90 px-6 py-3 text-white">
          Task #1 demo
        </Link>
        <Link href="/task-2" className="rounded-full bg-black/90 px-6 py-3 text-white">
          Task #2 demo
        </Link>
        <Link href="/task-3" className="rounded-full bg-black/90 px-6 py-3 text-white">
          Task #3 demo
        </Link>
      </nav>
    </main>
  );
}
