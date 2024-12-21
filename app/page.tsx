import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./ui/components/ThemeSwitcher";
import Navigation from "./ui/components/Navigation";
import UserProfileCard from "./ui/components/UserProfileCard";
import UserProfileTabs from "./ui/components/UserProfileTabs";

export default function Home() {
  return (
    <>
      <Navigation />
      <UserProfileTabs/>
     
    </>
  );
}
