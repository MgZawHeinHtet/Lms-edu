import { Avatar } from "@nextui-org/react";
import React from "react";

export default function Comments() {
  return (
    <div className="border border-primary p-5 mt-5 bg-cyan-950 bg-opacity-50">
      <h1 className="text-xl font-bold text-primary">Comments</h1>

      <div className="mt-5 grid gap-3 ">
        <CommentsItem/>
        <CommentsItem/>
        <CommentsItem/>
        <CommentsItem/>
      </div>
    </div>
  );
}

function CommentsItem() {
  return (
    <div className="flex gap-2 items-center">
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
  );
}
