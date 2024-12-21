import SideBar from "../ui/components/side-bar/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <SideBar />

      <div className="w-full ">{children}</div>
    </main>
  );
}
