import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
// import { redirect } from "next/dist/server/api-utils";
import redirect from 'next/navigation'
import { Redirect } from "next";
import { SignInButton } from "@/Components/buttons";

export default function Home() {

  async function checkIfAuthenticated() {
    const session = await getServerSession();
  
    console.log(session);

    // if (session) {
    //   Redirect('/dashboard');
    //   redirect('/dashboard');
    // }
  }

  checkIfAuthenticated();



  return (
    <main>
      <div className="flex flex-col justify-between p-14 text-[50px]">
        <h1>Gym Tracker</h1>
      </div>

      <div className="flex flex-col items-center text-[30px] pt-24">
        <SignInButton />
        {/* <Link href='/api/auth/signin'>
          <button className="">Sign In</button>
        </Link> */}
      </div>
    </main>
  );
}
