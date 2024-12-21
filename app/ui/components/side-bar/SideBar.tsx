"use client";
import { Button, Divider } from "@nextui-org/react";
import clsx from "clsx";
import { connect } from "http2";
import {
    ArrowRight,
  ChartAreaIcon,
  CreditCard,
  HandshakeIcon,
  Layers,
  PlayCircle,
  Settings,
  VideotapeIcon,
} from "lucide-react";
import React, { useState } from "react";

const sidebarContents = [
  {
    name: "Dashboard",
    icon: <Layers />,
  },
  {
    name: "Coachs",
    icon: <HandshakeIcon />,
  },
  {
    name: "Leaners",
    icon: <ChartAreaIcon />,
  },
  {
    name: "Videos",
    icon: <VideotapeIcon />,
  },
  {
    name: "Settings",
    icon: <Settings />,
  },
  {
    name: "Billing",
    icon: <CreditCard />,
  },
];

function SideBar() {
  const [isOpen, SetIsOpen] = useState(true);
  return (
    <div
      className={clsx(" pt-5 bg-[#161B1F] h-screen relative", {
        "w-96": isOpen,
      })}
    >
      <h1 className="font-bold text-2xl text-primary px-5">
        {isOpen ? "Lms.Wtf" : "L"}
      </h1>

      <div className="mt-10">
        {sidebarContents.map((content, index) =>
          content.name === "Billing" ? (
            <>
              <Divider />
              <SideBarItem
                key={index}
                name={content.name}
                icon={content.icon}
                isOpen={isOpen}
              />
            </>
          ) : (
            <SideBarItem
              key={index}
              name={content.name}
              icon={content.icon}
              isOpen={isOpen}
            />
          )
        )}

        <div className="absolute left-2 bottom-0">
          <Button isIconOnly variant="bordered" color="primary" onPress={() => SetIsOpen(!isOpen)}>
            <ArrowRight className={clsx({'rotate-180':isOpen})}/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

function SideBarItem({
  name,
  icon,
  isActive,
  isOpen,
}: {
  name: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isOpen: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex gap-3 items-center px-3 py-3 border-transparent border-l-4",
        {
          "!border-primary": isActive,
        }
      )}
    >
      {icon}
      {isOpen && <span>{name}</span>}
    </div>
  );
}
