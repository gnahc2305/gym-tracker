import AuthCheck from "@/components/AuthCheck";
import Card from "@/components/Card";
import NewExercise from "@/components/NewExercise";
import { SignInButton, SignOutButton } from "@/components/buttons";
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
        <p className="pl-10">Insert details of workout, and record progress</p>
      </nav>

      <div className="flex p-10">
        <div className="bg-gray-300 p-4">
          <h3 className="">Add new Workout</h3>
          <NewExercise />
        </div>

        <div className="ml-14 w-[100%]">
          <h1>Previous Workouts</h1>
          <div className="mt-2 mr-[-30px] grid gap-y-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
