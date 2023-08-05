import AuthCheck from "@/components/AuthCheck";
import Card from "@/components/Card";
import NewExercise from "@/components/NewExercise";
import { SignInButton, SignOutButton } from "@/components/buttons";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

async function dashboard() {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  // check all of the workouts in the database that match the owner
  const workouts = await prisma.workout.findMany({
    where: {
      ownerId: user?.id,
    }
  })

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
          <NewExercise user={user} />
        </div>

        <div className="ml-14 w-[100%]">
          <h1>Previous Workouts</h1>
          <div className="mt-2 mr-[-30px] grid gap-y-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2">
            {/* TODO: Make the data dynamic (refresh server component) */}
            {/* TODO: Make the /dashboard route inaccesible to unathenticated users */}
            {workouts.map((workout, i) => {
              return <Card key={i} workout={workout} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
