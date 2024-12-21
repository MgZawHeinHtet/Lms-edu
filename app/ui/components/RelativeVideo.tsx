import { Avatar } from "@nextui-org/react";
import React from "react";
import { PlayIcon } from "../icons/play";

export default function RelativeVideo() {
  return (
    <div className="border border-primary p-5 mt-5 bg-cyan-950 bg-opacity-50">
      <h1 className="text-xl font-bold text-primary">Comments</h1>

      <div className="mt-5 grid gap-3 ">
        <RelativeItem/>
        <RelativeItem/>
        <RelativeItem/>
        <RelativeItem/>
        <RelativeItem/>
      </div>
    </div>
  );
}

function RelativeItem() {
  return (
    <div className="flex gap-2 items-center border border-primary p-3 bg-gradient-to-tr from-cyan-950 to-transparent">
      <div className="w-16 h-10 border border-primary flex items-center justify-center">
        <PlayIcon className="text-primary"/>
      </div>
      <div>
        <h1 className="text-primary font-bold">Zaw Hein htet</h1>
        <h1 className="text-primary opacity-70">Production Manger</h1>
      </div>
    </div>
  );
}
