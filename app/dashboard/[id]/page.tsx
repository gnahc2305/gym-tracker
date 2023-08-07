import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInButton, SignOutButton } from "@/components/buttons";
import AuthCheck from "@/components/AuthCheck";

interface Props {
  params: {
    id: string;
  };
}

export default async function WorkoutId({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const workout = await prisma.workout.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="">
      <nav>
        <div className="flex p-10 text-[30px] text-white">
          <h1>Gym Tracker</h1>
          <div className="ml-auto flex">
            <div className="pr-10">
              <SignInButton />
            </div>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <h1 className="text-white text-center">Edit Workout</h1>
      <div className="text-center">
        <form>
          <input
            type="text"
            name="exercise1"
            defaultValue={workout?.exercise1!}
            required
          />
          <br />
          <input
            type="text"
            name="exercise2"
            defaultValue={workout?.exercise2!}
            required
          />
          <br />
          <input
            type="text"
            name="exercise3"
            defaultValue={workout?.exercise3!}
            required
          />
          <br />
          <input
            type="text"
            name="exercise4"
            defaultValue={workout?.exercise4!}
            required
          />
          <br />
          <input
            type="text"
            name="exercise5"
            defaultValue={workout?.exercise5!}
            required
          />
          <br />
          <input
            type="text"
            name="exercise6"
            defaultValue={workout?.exercise6!}
            required
          />
          <br />
          <button className="text-white">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
