import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Hello, Welcome to The RajaOngkir Website</h1>
      <h1 className="text-2xl font-semibold">Your Solution to get your cheapest Ongkir</h1>
      <Link href="auth/login">
        <Button className="border border-black hover:bg-white hover:text-black">Login</Button>
      </Link>
    </main>
  );
}
