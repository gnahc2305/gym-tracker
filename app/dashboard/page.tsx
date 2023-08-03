import AuthCheck from "@/Components/AuthCheck";
import NewExercise from "@/Components/NewExercise";
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
        <div className="bg-gray-300 p-4">
          <h3 className="mb-3">Insert details of workout</h3>
          <NewExercise />
        </div>

        <div className="ml-14">
          Tables
        </div>
      </div>
    </div>
  );
}

export default dashboard;
