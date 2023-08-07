import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import React from "react";
import Link from "next/link";

function Card({
  workout: {
    date,
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    id,
  },
}: any) {
  async function deleteWorkout() {
    "use server";
    const session = await getServerSession(authOptions);

    const deletedWorkout = await prisma.workout.delete({
      where: {
        id: id,
      },
    });
    console.log(deletedWorkout);
    revalidatePath("/dashboard");
  }

  return (
    <Link href={`/dashboard/${id}`}>
      <div className="h-auto w-[275px] bg-slate-300 p-2 rounded-md">
        <h2 className="mb-3">{date}</h2>
        <h1 className="mb-2">{exercise1}</h1>
        <h1 className="mb-2">{exercise2}</h1>
        <h1 className="mb-2">{exercise3}</h1>
        <h1 className="mb-2">{exercise4}</h1>
        <h1 className="mb-2">{exercise5}</h1>
        <h1 className="mb-2">{exercise6}</h1>

        <form action={deleteWorkout}>
          <button className="text-red-900">Delete Workout</button>
        </form>
      </div>
    </Link>
  );
}

export default Card;
