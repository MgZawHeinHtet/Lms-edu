"use client";
import { Avatar, Chip } from "@nextui-org/react";

export default function VideoCard() {
  return (
    <div className="border border-primary bg-gradient-to-t from-cyan-950 to-transparent  grid  text-primary p-5 gap-2">
      <div className="w-full bg-primary h-36"></div>
      <h1 className="text-2xl font-bold">How to make video with ai</h1>
      <h4 className="opacity-70">Web developer</h4>
      <div className="flex gap-2 items-center ">
        <div>
          <Avatar
            className="border border-primary"
            radius="none"
            isBordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>
        <div>
          <h1 className="text-primary font-bold">Zaw Hein htet</h1>
          <h1 className="text-primary opacity-70">Production Manger</h1>
        </div>
      </div>
    </div>
  );
}
