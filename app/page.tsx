import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-between p-14 text-[50px]">
        <h1>Gym Tracker</h1>
      </div>

      <div className="flex flex-col items-center text-[30px] pt-24">
        <Link href='/api/auth/signin'>
          <button className="">Sign In</button>
        </Link>
      </div>
    </main>
  );
}
