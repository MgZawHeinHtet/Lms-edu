"use client";
import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import UserProfileCard from "./UserProfileCard";
import VideoCard from "./VideoCard";

export default function UserVideoCardTabs() {
  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col gap-4">
        <Tabs
          aria-label="Options"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider border-cyan-900",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primary",
          }}
          color="primary"
          variant="underlined"
        >
          <Tab key="all" title="All">
            <div className="grid grid-cols-3 gap-3">
              <VideoCard />
              <VideoCard />
            </div>
          </Tab>
          <Tab key="community" title="Community">
            <div className="grid grid-cols-3 gap-3">
              <h1>Community</h1>
            </div>
          </Tab>
          <Tab key="about" title="About">
            <div className="grid grid-cols-3 gap-3">
              <div>About</div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
