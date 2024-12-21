"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { SolarBellBold } from "../icons/bell";
import { SolarUserBold } from "../icons/uesr";
import { SolarMagniferBold } from "../icons/magnifier";
import { SearchCheckIcon, SearchIcon } from "lucide-react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Navigation() {
  return (
    <Navbar maxWidth="full" className="border-b border-cyan-950">
      <NavbarBrand className="">
        <div className="flex gap-5 items-center border-primary">
          <p className="font-bold text-primary text-3xl text-inherit">LMS</p>
          <SolarMagniferBold className="w-7 h-7 text-primary" />
        </div>
        <div className="flex gap-5 items-center border-l-2 px-3 ml-10 border-cyan-950">
          <p className="font-bold  text-xl text-inherit">Dashboard</p>
          {/* <SolarMagniferBold className="w-7 h-7 text-primary" /> */}
        </div>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Video
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="light" radius="none" isIconOnly>
            <SolarUserBold />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button color="primary" variant="light" radius="none" isIconOnly>
            <SolarBellBold />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button color="primary" variant="light" radius="none" isIconOnly>
            <SearchIcon />
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button color="primary" variant="bordered" radius="none" isIconOnly>
            <SolarUserBold />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
