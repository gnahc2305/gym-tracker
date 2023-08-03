"use client";

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
redirect

export default function AuthCheck({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    console.log(session, status)

    if (status === 'authenticated') {
        return <>{children}</>
    } else {
        redirect('/');
        return <>Not logged in to see this</>
    }
}