import React from "react";
import "@/public/scss/activity.scss";
import Activity from "@/components/photo/Activity";

const page = async () => {
  return (
    <div className="m-inner activity-inner">
      <Activity></Activity>
    </div>
  );
};

export default page;
