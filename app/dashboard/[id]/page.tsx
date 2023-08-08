import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInButton, SignOutButton } from "@/components/buttons";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

const formStyle = 'rounded-md p-2 text-lg'

export const metadata: Metadata = {
  title: "Workout",
}

export default async function WorkoutId({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  // get the user thats currently logged in
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  // get the workout
  const workout = await prisma.workout.findUnique({
    where: {
      id: params.id,
    },
  });

  // if the owner id of the workout isn't the same the current user redirect them to the home page
  if (user?.id != workout?.ownerId) {
    redirect("/");
  }

  async function updateWorkout(formData: FormData) {
    "use server";

    const updatedWorkout = await prisma.workout.update({
      where: {
        id: params.id,
      },
      data: {
        // @ts-ignore
        exercise1: formData.get("exercise1"),
        // @ts-ignore
        exercise2: formData.get("exercise2"),
        // @ts-ignore
        exercise3: formData.get("exercise3"),
        // @ts-ignore
        exercise4: formData.get("exercise4"),
        // @ts-ignore
        exercise5: formData.get("exercise5"),
        // @ts-ignore
        exercise6: formData.get("exercise6"),
      },
    });
    console.log(updatedWorkout);
    redirect("/dashboard");
  }

  async function deleteWorkout() {
    "use server";

    const deletedWorkout = await prisma.workout.delete({
      where: {
        id: params.id,
      },
    });
    console.log(deletedWorkout);
    redirect("/dashboard");
  }

  return (
    <div className="">
      <nav>
        <div className="flex p-10 text-[30px] text-white">
          <Link href='/dashboard'>
            <h1>Gym Tracker</h1>
          </Link>
          <div className="ml-auto flex">
            <div className="pr-10">
              <SignInButton />
            </div>
            <SignOutButton />
          </div>
        </div>
      </nav>

      <h1 className="text-white text-center mb-5 text-3xl">Edit Workout:</h1>
      <div className="w-[50%] m-auto">
        <form action={updateWorkout} className="flex flex-col items-center justify-center">
          <input name="exercise1" defaultValue={workout?.exercise1!} required className={formStyle} />
          <br />
          <input name="exercise2" defaultValue={workout?.exercise2!} required className={formStyle} />
          <br />
          <input name="exercise3" defaultValue={workout?.exercise3!} required className={formStyle} />
          <br />
          <input name="exercise4" defaultValue={workout?.exercise4!} required className={formStyle} />
          <br />
          <input name="exercise5" defaultValue={workout?.exercise5!} required className={formStyle} />
          <br />
          <input name="exercise6" defaultValue={workout?.exercise6!} required className={formStyle} />
          <br />
          <button className="text-white bg-[#10B981] p-2 rounded-md w-[150px]">Save Changes</button>
        </form>
        <form action={deleteWorkout} className="text-center">
          <button className="bg-red-600 text-white p-2 rounded-md mt-3 w-[150px]">Delete Workout</button>
        </form>
      </div>
    </div>
  );
}
