import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const toRead = await db.course.findMany();
    return NextResponse.json(toRead);
  } catch (error) {
    console.log({ error });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const getBody = await req.json();

  try {
    const toStoreData = await db.course.create({
      data: {
        title: getBody.title,
        description: getBody.description,
      },
    });
    return NextResponse.json(toStoreData);
  } catch (error) {
    console.log({ error });
  }
}
