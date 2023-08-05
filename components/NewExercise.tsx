import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function NewExercise({ user }: any) {
  // const [numberOfExercises, setNumberOfExercises] = useState([""]);
  let numberOfExercises = ["ex1", "ex2", "ex3", "ex4", "ex5", "ex6"]; 

  // function addExercise() {
  //   if (numberOfExercises.length < 6) {
  //     setNumberOfExercises((current) => [...current, "exercise"]);
  //   } else {
  //     alert("Max Capacity of exercises");
  //   }
  // }

  // async function createWorkout(e: React.FormEvent<HTMLFormElement>) {
  async function createWorkout(formData: FormData) {
    "use server";
    const session = getServerSession(authOptions)

    // const formData = new FormData(e.currentTarget);

    // update the database with the form data
    const workout = await prisma.workout.create({
      data: {
        date: formData.get("date"),
        exercise1: formData.get("exercise0"),
        exercise2: formData.get("exercise1"),
        exercise3: formData.get("exercise2"),
        exercise4: formData.get("exercise3"),
        exercise5: formData.get("exercise4"),
        exercise6: formData.get("exercise5"),
        ownerId: user.id,
      },
    });

    revalidatePath('/dashboard');
    console.log(workout);

    //send the body to the api endpoint
    // const res = await fetch("/api/workout", {
    //   method: "POST",
    //   body: JSON.stringify(body),
    //   headers: { "Content-Type": "application/json" },
    // });

    // console.log(res);
  }

  return (
    <div className="mt-10 w-full ">
      <div className="flex content-center mb-4 justify-between">
        {/* <button onClick={addExercise} className="">
          Add Exercise
        </button> */}
        <button>Reset</button>
      </div>
      <form action={createWorkout} className="flex flex-col mb-4">
        <div className="flex justify-between content-center mb-4">
          <input type="date" name="date" required />
          <button className="">Submit</button>
        </div>

        {numberOfExercises.map(function (object, i) {
          return (
            <div key={i} className="flex items-center mb-4">
              <label className="" htmlFor={`exercise${i}`}>
                Exercise{i + 1}
              </label>
              <input
                className=" p-4 rounded-xl"
                type="text"
                name={`exercise${i}`}
                placeholder="Exercise/Weight/Sets/Reps"
                // defaultValue="Exercise/Weight/Sets/Reps"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default NewExercise;
