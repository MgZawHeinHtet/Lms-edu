"use client"
import Comments from "@/app/ui/components/Comments";
import RelativeVideo from "@/app/ui/components/RelativeVideo";
import VideoCardDetail from "@/app/ui/components/VideoCardDetail";
import { Avatar } from "@nextui-org/react";
import { param } from "framer-motion/client";
import React from "react";

function page({params}:{params?: {videoId : 'string'}}) {
  return (
    <div>
      <VideoCardDetail videoId={params?.videoId}/>
      <div className="grid lg:grid-cols-2 gap-3">
        <Comments/>
        <RelativeVideo/>
      </div>
    </div>
  );
}

export default page;
