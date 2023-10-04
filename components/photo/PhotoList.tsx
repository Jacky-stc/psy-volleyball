"use client";
import React, { useEffect, useMemo } from "react";
import "@/public/scss/photo.scss";
import { useState } from "react";

const PhotoList = ({ data }) => {
  const [photoCategory, setPhotoCategory] = useState("");
  const categoryList = ["所有相簿", "盃賽", "送舊", "聚會活動", "瑣碎日常"];
  const groupedData = data.reduce((groups, item) => {
    const { cat, folder, url } = item;
    if (!groups[cat]) {
      groups[cat] = [];
    }

    groups[cat].push({ folder, url });

    return groups;
  }, {});
  const albumsList = {};
  // 预处理数据，将相同的 folder 分组到 albums 中
  if (groupedData) {
    Object.keys(groupedData).forEach((category) => {
      groupedData[category].forEach((item) => {
        if (!albumsList[item.folder]) {
          albumsList[item.folder] = [];
        }
        item["cat"] = category;
        albumsList[item.folder].push(item);
      });
    });
  }
  const sortAlbumList = {};
  Object.keys(groupedData).forEach((category) => {
    if (!sortAlbumList[category]) {
      sortAlbumList[category] = {};
    }
    groupedData[category].forEach((item) => {
      if (!sortAlbumList[category][item.folder]) {
        sortAlbumList[category][item.folder] = [];
      }
      item["cat"] = category;
      sortAlbumList[category][item.folder].push(item);
    });
  });
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
        {photoCategory === ""
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
          : Object.keys(sortAlbumList[photoCategory]).map((folder, index) => (
              // 遍历每个活动
              <div className="photo-list-item" key={index}>
                <a>
                  <figure>
                    <img
                      src={sortAlbumList[photoCategory][folder][0]["url"]}
                      alt="photo-item"
                      loading="lazy"
                    />
                  </figure>
                  <h2>{folder}</h2>
                  <ul>
                    <li>{sortAlbumList[photoCategory][folder][0]["cat"]}</li>
                  </ul>
                </a>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PhotoList;
