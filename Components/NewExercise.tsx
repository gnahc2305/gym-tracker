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
    <div className="mt-10 h-[400px] w-full bg-slate-500">
      <div className="flex content-center test justify-between">
        <button onClick={addExercise} className="">
          Add Exercise
        </button>
        <button>Reset</button>
      </div>
      <form action="" className="flex flex-col test">
        <div className="flex justify-between content-center test">
          <input type="date" id="date" name="date" required />
          <button className="">Submit</button>
        </div>

        {numberOfExercises.map(function (object, i) {
          return (
            <div key={i}>
              <label className="" htmlFor={`exercise${i++}`}>
                Exercise {i++}{" "}
              </label>
              <input
                className="test p-4"
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
