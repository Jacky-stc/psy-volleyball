"use client";
import React, { useState } from "react";

const Albums = () => {
  const [selectAlbum, setSelectAlbum] = useState("");
  return (
    <>
      <div
        className={`homepage-photo-list-item ${
          selectAlbum === "盃賽" ? "hover-active" : null
        }`}
        onMouseEnter={() => {
          setSelectAlbum("盃賽");
        }}
      >
        <h3 className="homepage-photo-list-item-title">盃賽</h3>
        <div className="homepage-photo-list-item-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, tempore
          odit hic ea quae dolore veritatis cupiditate voluptatum exercitationem
          earum.
        </div>
        <figure className="homepage-photo-list-figure">
          <img src="/img/homepage-photo-1.jpg" className="img1" />
          <img src="/img/homepage-photo-2.jpg" className="img2" />
        </figure>
      </div>
      <div
        className={`homepage-photo-list-item ${
          selectAlbum === "送舊" ? "hover-active" : null
        }`}
        onMouseEnter={() => {
          setSelectAlbum("送舊");
        }}
      >
        <h3 className="homepage-photo-list-item-title">送舊</h3>
        <div className="homepage-photo-list-item-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, tempore
          odit hic ea quae dolore veritatis cupiditate voluptatum exercitationem
          earum.
        </div>
        <figure className="homepage-photo-list-figure">
          <img src="/img/homepage-photo-3.jpg" className="img1" />
          <img src="/img/homepage-photo-4.jpg" className="img2" />
        </figure>
      </div>
      <div
        className={`homepage-photo-list-item ${
          selectAlbum === "聚會活動" ? "hover-active" : null
        }`}
        onMouseEnter={() => {
          setSelectAlbum("聚會活動");
        }}
      >
        <h3 className="homepage-photo-list-item-title">聚會活動</h3>
        <div className="homepage-photo-list-item-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, tempore
          odit hic ea quae dolore veritatis cupiditate voluptatum exercitationem
          earum.
        </div>
        <figure className="homepage-photo-list-figure">
          <img src="/img/homepage-photo-5.jpg" className="img1" />
          <img src="/img/homepage-photo-6.jpg" className="img2" />
        </figure>
      </div>
      <div
        className={`homepage-photo-list-item ${
          selectAlbum === "瑣碎日常" ? "hover-active" : null
        }`}
        onMouseEnter={() => {
          setSelectAlbum("瑣碎日常");
        }}
      >
        <h3 className="homepage-photo-list-item-title">瑣碎日常</h3>
        <div className="homepage-photo-list-item-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, tempore
          odit hic ea quae dolore veritatis cupiditate voluptatum exercitationem
          earum.
        </div>
        <figure className="homepage-photo-list-figure">
          <img src="/img/homepage-photo-7.jpg" className="img1" />
          <img src="/img/homepage-photo-8.jpg" className="img2" />
        </figure>
      </div>
    </>
  );
};

export default Albums;
