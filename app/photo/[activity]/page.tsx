import React from "react";
import "@/public/scss/activity.scss";
import Activity from "@/components/photo/Activity";
import { Suspense } from "react";

const page = async ({ params }: { params: { activity: string } }) => {
  async function getPhotos() {
    const res = await fetch(
      `${process.env.URL}/api/photo/${params.activity}?page=0`
    );
    const photos = await res.json();
    return photos;
  }
  if (!process.env.URL) {
    return null;
  }
  const result = await getPhotos();
  return (
    <div className="m-inner activity-inner">
      <Suspense fallback={<div>loading...</div>}>
        <Activity
          initialPhotos={result["photos"]}
          folder={params.activity}
          url={process.env.URL}
        ></Activity>
      </Suspense>
    </div>
  );
};

export default page;
