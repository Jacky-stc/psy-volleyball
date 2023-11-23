"use client";
import React, { useState } from "react";

const Albums = () => {
  const [selectAlbum, setSelectAlbum] = useState("盃賽");
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
          大心盃與北心盃分別代表了心理相關學系上下半年的兩大盃賽，平時一切的訓練都只為了能在比賽中順利開花結果。
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
          每每到了畢業的季節，總不免讓人感到不捨與難過，學弟妹們透過送舊活動的舉辦來傳達對於學長姊的感謝之情，也讓即將畢業的學長姐們得以細數這四年來的美好，為大學的排球生涯畫下一個完美的句點。
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
          除了平時的練球外，球隊也會不定時地舉辦隊員的聚會活動，例如期末隊聚、隊遊、移地訓練等等，不只能增進場下隊員們之間的感情，也能大大提升彼此在場上時的默契！
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
          練球、夜唱、吃宵、夜半談天，那些零碎的時光填滿了年少的歲月，也堆砌出了永恆的美好。
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
