'use client';

import { redirect } from "next/navigation";
import { SignInButton } from "@/Components/buttons";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <main>
      <div className="flex flex-col justify-between p-14 text-[50px]">
        <h1>Gym Tracker</h1>
      </div>

      <div className="flex flex-col items-center text-[30px] pt-24">
        <SignInButton />
        {/* <Link href='/api/auth/signin'>
          <button className="">Sign In</button>
        </Link> */}
      </div>
    </main>
  );
}
