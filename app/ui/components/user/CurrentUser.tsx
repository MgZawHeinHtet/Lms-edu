import { auth } from "@/auth";
import { db } from "@/lib/db";
import React from "react";

async function CurrentUser() {
  const session = await auth();
  const toRead = await db.user.findFirst({
    where: {
      email: session?.user?.email as string,
    },
  });
  return <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  <code className="text-white">{JSON.stringify(toRead, null, 2)}</code>
</pre>;
}

export default CurrentUser;
