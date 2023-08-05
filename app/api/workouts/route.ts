import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const workouts = await prisma.workout.findMany();
    
    return NextResponse.json(workouts);
}