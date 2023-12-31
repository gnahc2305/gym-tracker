import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import SubmitButton from "./SubmitButton";

function NewExercise({ user }: any) {
  const numberOfExercises = ["ex1", "ex2", "ex3", "ex4", "ex5", "ex6"];

  async function createWorkout(formData: FormData) {
    "use server";
    const session = getServerSession(authOptions);

    // update the database with the form data
    const workout = await prisma.workout.create({
      data: {
        // @ts-ignore
        date: formData.get("date"),
        // @ts-ignore
        exercise1: formData.get("exercise0"),
        // @ts-ignore
        exercise2: formData.get("exercise1"),
        // @ts-ignore
        exercise3: formData.get("exercise2"),
        // @ts-ignore
        exercise4: formData.get("exercise3"),
        // @ts-ignore
        exercise5: formData.get("exercise4"),
        // @ts-ignore
        exercise6: formData.get("exercise5"),
        ownerId: user.id,
      },
    });

    revalidatePath("/dashboard");
    console.log(workout);
  }

  return (
    <div className="mt-3">
      <form action={createWorkout} className="mb-2">
        <div className="mb-4 text-black">
          <input type="date" name="date" required />
        </div>

        {numberOfExercises.map(function (object, i) {
          return (
            <div key={i} className="mb-4">
              <label className="" htmlFor={`exercise${i}`}>
                Exercise{i + 1}:
              </label>
              <input
                className=" p-4 rounded-md text-black"
                type="text"
                name={`exercise${i}`}
                placeholder="Exercise/Weight/Sets/Reps"
                required
              />
            </div>
          );
        })}
        <SubmitButton />
      </form>
    </div>
  );
}

export default NewExercise;
