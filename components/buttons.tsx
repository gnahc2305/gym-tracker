"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export function SignInButton() {
  const { data: session, status } = useSession();
  // console.log(session, status);

  if (status === "loading") {
    return <>Loading Data...</>;
  }

  if (status === "authenticated") {
    return (
      // <h1>Hello {session?.user?.name}</h1>
      <Image
        src={session?.user?.image ?? "/mememan.webp"}
        width={50}
        height={50}
        alt="Your Name"
      />
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
