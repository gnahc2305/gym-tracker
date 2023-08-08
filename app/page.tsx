"use client";

import { redirect } from "next/navigation";
import { SignInButton } from "@/components/buttons";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/dashboard");
  }

  return (
    <main>
      <div className="flex flex-col justify-between p-14 text-[50px] text-white">
        <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gym Tracker</h1>
      </div>

      <div className="flex flex-col text-center text-[30px] pt-24 text-white mb-[20rem]">
        <p className="pb-2">Log your training</p>
        <p className="pb-2">Track your progress</p>
        <p>Take control of your workouts</p>
        <div className="mt-10 bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-md self-center">
          <SignInButton />
        </div>
      </div>
    </main>
  );
}
