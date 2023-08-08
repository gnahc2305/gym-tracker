import Card from "@/components/Card";
import NewExercise from "@/components/NewExercise";
import { SignInButton, SignOutButton } from "@/components/buttons";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gym Tracker"
}

async function dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

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
    },
  });

  console.log(workouts);

  return (
    <div>
      <nav>
        <div className="flex p-10 text-[30px] text-white">
          <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Gym Tracker
          </h1>
          <div className="ml-auto flex">
            <div className="sm:pr-10 self-center">
              <SignInButton />
            </div>
            <SignOutButton />
          </div>
        </div>
        <p className="pl-10 text-white text-xl">
          Insert details of workout, and record progress
        </p>
      </nav>

      <div className="p-10 sm:flex">
        <div className="bg-[#20252D] p-4 text-white rounded-md mb-[30px] sm:mb-0">
          <h3 className="">Add new Workout</h3>
          <NewExercise user={user} />
        </div>

        <div className="sm:ml-14 w-[100%] mr-5">
          <h1 className="text-white text-xl">Previous Workouts: </h1>
          <div className="mt-2 sm:mr-[-30px] grid gap-y-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-x-5">
            {/* If there are no workouts, render a <p> tag */}
            {workouts.length < 1 ? (
              <p className="text-white">You dont have any workouts created</p>
            ) : (
              workouts.map((workout, i) => {
                return <Card key={i} workout={workout} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
