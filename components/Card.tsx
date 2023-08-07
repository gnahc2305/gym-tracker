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
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="h-auto w-[275px] bg-white p-2 rounded-md">
        <h2 className="mb-3">{date}</h2>
        <h1 className="mb-2">{exercise1}</h1>
        <h1 className="mb-2">{exercise2}</h1>
        <h1 className="mb-2">{exercise3}</h1>
        <h1 className="mb-2">{exercise4}</h1>
        <h1 className="mb-2">{exercise5}</h1>
        <h1 className="mb-2">{exercise6}</h1>
      </div>
    </Link>
  );
}

export default Card;
