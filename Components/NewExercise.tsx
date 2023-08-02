"use client";
import React from "react";
import { useState } from "react";

function NewExercise() {
  const [numberOfExercises, setNumberOfExercises] = useState([""]);

  function addExercise() {
    setNumberOfExercises((current) => [...current, "test"]);
  }

  return (
    <div className="mt-10 h-[400px] w-full bg-slate-500">
      <button onClick={addExercise}>Add Exercise</button>
      <form action="" className="flex flex-col">
        <input type="date" id="date" name="date" required />
        {numberOfExercises.map(function (object, i) {
          return (
            <div key={i}>
              <label htmlFor={`exercise${i++}`}>Exercise {i++}</label>
              <input type="text" id={`exercise${i++}`} name={`exercise${i++}`} placeholder="Exercise/Weight/Sets/Reps" />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default NewExercise;
