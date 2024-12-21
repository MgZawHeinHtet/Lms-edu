import Navigation from "@/app/ui/components/Navigation";
import VideoDataTable from "@/app/ui/components/videos/VideoDataTable";
import React from "react";

function page() {
  return (
    <div>
      <Navigation />
      <div className="p-5">
        <VideoDataTable />
      </div>
    </div>
  );
}

export default page;
