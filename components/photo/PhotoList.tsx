"use client";

import "@/public/scss/photo.scss";
import Link from "next/link";
import { useState } from "react";

const PhotoList = ({
  data,
}: {
  data: {
    "ANY_VALUE(cat)": string;
    folder: string;
    "ANY_VALUE(url)": string;
  }[];
}) => {
  const [photoCategory, setPhotoCategory] = useState("");
  const categoryList = ["所有相簿", "盃賽", "送舊", "聚會活動", "瑣碎日常"];
  let photoAlbum: {
    "ANY_VALUE(cat)": string;
    folder: string;
    "ANY_VALUE(url)": string;
  }[] = [];
  if (photoCategory === "" || photoCategory === "所有相簿") {
    photoAlbum = data;
  } else {
    photoAlbum = data.filter(
      (photo) => photo["ANY_VALUE(cat)"] === photoCategory
    );
  }
  const clickFunction = (cat: string) => {
    if (cat === "所有相簿") {
      setPhotoCategory("");
    } else {
      setPhotoCategory(cat);
    }
  };
  return (
    <div className="photo-body">
      <div className="photo-nav">
        {categoryList.map((cat, index) => (
          <div
            className="photo-nav-items"
            onClick={() => {
              clickFunction(cat);
            }}
            key={index}
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
        {photoAlbum.map((photo, index) => (
          <Link href={`/photo/${photo.folder}`} key={index}>
            <div className="photo-list-item">
              <figure className="album">
                <img
                  src={photo["ANY_VALUE(url)"]}
                  alt="photo-item"
                  loading="lazy"
                />
              </figure>
              <h2>{photo.folder}</h2>
              <ul>
                <li>{photo["ANY_VALUE(cat)"]}</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
