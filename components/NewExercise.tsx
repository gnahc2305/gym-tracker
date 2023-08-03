"use client";
import React from "react";
import { useState } from "react";

function NewExercise() {
  const [numberOfExercises, setNumberOfExercises] = useState([""]);

  function addExercise() {
    if (numberOfExercises.length < 6) {
      setNumberOfExercises((current) => [...current, "exercise"]);
    } else {
      alert("Max Capacity of exercises");
    }
  }

  return (
    <div className="mt-10 w-full ">
      <div className="flex content-center mb-4 justify-between">
        <button onClick={addExercise} className="">
          Add Exercise
        </button>
        <button>Reset</button>
      </div>
      <form action="" className="flex flex-col mb-4">
        <div className="flex justify-between content-center mb-4">
          <input type="date" id="date" name="date" required />
          <button className="">Submit</button>
        </div>

        {numberOfExercises.map(function (object, i) {
          return (
            <div key={i} className="flex items-center mb-4">
              <label className="" htmlFor={`exercise${i++}`}>
                Exercise{i++}
              </label>
              <input
                className=" p-4 rounded-xl"
                type="text"
                id={`exercise${i++}`}
                name={`exercise${i++}`}
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
