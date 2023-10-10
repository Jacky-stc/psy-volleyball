import React from "react";
import "@/public/scss/photo.scss";
import PhotoList from "@/components/photo/PhotoList";
import { Suspense } from "react";
import { Wait } from "@/lib/getData.js";

async function getPhotoList() {
  const result = await fetch("http://localhost:3000/api/photo");
  // await Wait(2000);
  if (!result.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

const page = async () => {
  const data = await getPhotoList();
  return (
    <div className="m-inner">
      <div className="photo-header">
        <h1 className="heading-2">
          <span className="en">PHOTO</span>
          <span className="ch">
            <span>照片紀念</span>
          </span>
        </h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoList data={JSON.parse(data["photoList"])}></PhotoList>
      </Suspense>
    </div>
  );
};

export default page;