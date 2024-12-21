"use client";
import { Avatar, Chip } from "@nextui-org/react";

export default function UserProfileCard() {
  return (
    <div className="border border-primary bg-gradient-to-t from-cyan-950 to-transparent  grid justify-center text-primary text-center p-5 gap-5">
      <Avatar
        isBordered
        className="mx-auto w-36 h-36"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
      <h1 className="text-2xl font-bold">Zaw Hein htet</h1>
      <h4 className="opacity-70">Web developer</h4>

      <div className="flex gap-2 opacity-70">
        <Chip className="p-3" color="primary" variant="bordered" radius="none">
          Next.js
        </Chip>
        <Chip className="p-3" color="primary" variant="bordered" radius="none">
          Next.js
        </Chip>
        <Chip className="p-3" color="primary" variant="bordered" radius="none">
          Next.js
        </Chip>
        <Chip className="p-3" color="primary" variant="bordered" radius="none">
          Next.js
        </Chip>
      </div>

      <h1 className="opacity-70">1000 videos</h1>
    </div>
  );
}
