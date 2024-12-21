"use client";
import { Avatar, Button, User } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function VideoCardDetail({videoId} : {videoId : 'string'}) {
  return (
    <div className="border border-primary p-5 ">
      <div className="">
        <iframe
          className="aspect-video w-full h-[600px]"
          src="https://www.youtube.com/embed/KhcxblsO1oY?si=EjUzArPcFU8ENKyG"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-5 flex justify-between items-end">
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
            <h1 className="text-primary opacity-70">{videoId}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button color="primary" variant="bordered" radius="none">
            Edit
          </Button>
          <Button color="primary" variant="bordered" radius="none">
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoCardDetail;
