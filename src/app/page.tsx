import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-30 ">
        <h3>Hello</h3>
      </div>
      <div>
        <h1>Welcome to My Website</h1>
        <p>
          <Link href="/profile">Go to Profile Page</Link>
        </p>
      </div>
    </main>
  );
}
