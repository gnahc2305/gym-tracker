import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

interface Props {
    params: {
        id: string,
    }
}

export default async function WorkoutId({ params }: Props) {
    const user = await prisma

    return (
        <div>
            test
            <p>{params.id}</p>
        </div>
    )
}