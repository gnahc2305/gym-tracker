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
      <div className=" bg-white py-2 px-5 text-lg rounded-md h-full">
        <h2 className="mb-3 text-[20px]">{date}</h2>
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
