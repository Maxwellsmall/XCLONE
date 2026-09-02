// app/page.tsx

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
     <Link href="/Routes/home">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer rounded">
        Sign Up
      </button>
     </Link>
    </main>
  );
}