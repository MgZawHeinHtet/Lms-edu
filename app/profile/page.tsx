import Navigation from "../ui/components/Navigation";
import UserProfileHeader from "../ui/components/UserProfileHeader";
import UserVideoCardTabs from "../ui/components/UserVideoCardTabs";

export default function Page() {
  return (
    <div className="">
      <Navigation />
      <UserProfileHeader/>
      <UserVideoCardTabs/>
    </div>
  );
}
