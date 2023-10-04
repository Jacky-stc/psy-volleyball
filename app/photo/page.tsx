import React from "react";
import "@/public/scss/photo.scss";
import PhotoList from "@/components/photo/PhotoList";

async function getPhotoList() {
  const result = await fetch("http://localhost:3000/api/photo");
  if (!result.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

const page = async () => {
  const data = await getPhotoList();
  console.log(data);
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
      <PhotoList data={JSON.parse(data["photoList"])}></PhotoList>
      {/* <div className="photo-body">
        <div className="photo-nav">
          {categoryList.map((cat) => (
            <div
              className="photo-nav-items"
              onClick={() => {
                setPhotoCategory(cat);
              }}
            >
              <button className="photo-nav-buttons">
                <span className="text">{cat}</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.259"
                    height="7.694"
                    viewBox="0 0 10.259 7.694"
                  >
                    <path
                      d="M7.433,4.637,1.04.123A.654.654,0,0,0,0,.616V9.643a.654.654,0,0,0,1.04.492L7.433,5.622a.6.6,0,0,0,0-.985"
                      transform="translate(10.259) rotate(90)"
                      fill="#3c3c3c"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="photo-list">
          {albumsList
            ? Object.keys(albumsList).map((folder, index) => (
                // 遍历每个活动
                <div className="photo-list-item" key={index}>
                  <a>
                    <figure>
                      <img
                        src={albumsList[folder][0]["url"]}
                        alt="photo-item"
                        loading="lazy"
                      />
                    </figure>
                    <h2>{folder}</h2>
                    <ul>
                      <li>{albumsList[folder][0]["cat"]}</li>
                    </ul>
                  </a>
                </div>
              ))
            : null}
        </div>
      </div> */}
    </div>
  );
};

export default page;
