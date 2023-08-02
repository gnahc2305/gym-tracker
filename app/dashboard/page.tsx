import AuthCheck from "@/Components/AuthCheck";
import { SignInButton, SignOutButton } from "@/Components/buttons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

function dashboard() {

  return (
    <div>
      <nav>
        <div className="flex p-10 text-[30px]">
          <h1>Gym Tracker</h1>
          <div className="ml-auto flex">
            <div className="pr-10">
              <SignInButton />
            </div>
            <AuthCheck>
              <SignOutButton />
            </AuthCheck>
          </div>
        </div>
      </nav>

      <div className="flex p-10">
        <div className="bg-gray-300">
          <h3>Insert details of workout, and record progress</h3>

          <div className="mt-10 h-[400px] w-full bg-slate-800">
            <form action="">
              <input type="date" id="date" name="date" required />
            </form>
          </div>
        </div>

        <div className="ml-14">
          Tables
        </div>
      </div>
    </div>
  );
}

export default dashboard;
