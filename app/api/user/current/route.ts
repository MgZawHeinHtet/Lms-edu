import { Email } from "next-auth/providers/email";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  const toRead = await db.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
  });

  return NextResponse.json(toRead);
}
