import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { SignInButton, SignOutButton } from "@/components/buttons";

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
        <form action={deleteWorkout}>
          <button className="text-red-900">Delete Workout</button>
        </form>
      </div>
    </div>
  );
}
