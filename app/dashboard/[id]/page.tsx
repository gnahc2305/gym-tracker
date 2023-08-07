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
    redirect('/dashboard');
  }

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
        <form action={updateWorkout}>
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
