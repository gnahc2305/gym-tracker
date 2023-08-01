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
              {/* {redirect('/')} */}
              <SignOutButton />
            </AuthCheck>
          </div>
        </div>
      </nav>
      <h3>Insert details of workout, and record progress</h3>
    </div>
  );
}

export default dashboard;
