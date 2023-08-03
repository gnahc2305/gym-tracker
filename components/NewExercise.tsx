"use client";

import React from "react";
import { useState } from "react";

function NewExercise({ user }: any) {
  const [numberOfExercises, setNumberOfExercises] = useState([""]);

  function addExercise() {
    if (numberOfExercises.length < 6) {
      setNumberOfExercises((current) => [...current, "exercise"]);
    } else {
      alert("Max Capacity of exercises");
    }
  }
  // console.log(user);

  async function createWorkout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      date: formData.get('date'),
      exercise1: formData.get('exercise0'),
      exercise2: formData.get('exercise1'),
      exercise3: formData.get('exercise2'),
      exercise4: formData.get('exercise3'),
      exercise5: formData.get('exercise4'),
      exercise6: formData.get('exercise5'),
    }
    console.log(body);
  }

  return (
    <div className="mt-10 w-full ">
      <div className="flex content-center mb-4 justify-between">
        <button onClick={addExercise} className="">
          Add Exercise
        </button>
        <button>Reset</button>
      </div>
      <form onSubmit={createWorkout} className="flex flex-col mb-4">
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
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default NewExercise;
