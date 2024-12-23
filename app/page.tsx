import Image from "next/image";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./ui/components/ThemeSwitcher";
import Navigation from "./ui/components/Navigation";
import UserProfileCard from "./ui/components/UserProfileCard";
import UserProfileTabs from "./ui/components/UserProfileTabs";
import { auth } from "@/auth";
import { SignOut } from "./ui/components/user/SignOut";
import CurrentUser from "./ui/components/user/CurrentUser";

export default async function Home() {
  const session = await auth();
  return (
    <>
       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(session, null, 2)}</code>
        </pre>
        <CurrentUser/>
        <SignOut/>
      <Navigation />
      <UserProfileTabs/>
     
    </>
  );
}
