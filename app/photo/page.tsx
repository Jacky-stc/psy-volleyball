import React from "react";
import "@/public/scss/photo.scss";
import PhotoList from "@/components/photo/PhotoList";

async function getPhotoList() {
  const result = await fetch(`${process.env.URL}/api/photo`);
  // await Wait(2000);
  if (!result.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

const page = async () => {
  if(!process.env.URL){
    return null
  }
  const data: { photoList: string } = await getPhotoList();
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
      <PhotoList data={JSON.parse(data.photoList)}></PhotoList>
    </div>
  );
};

export default page;
