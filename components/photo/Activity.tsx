"use client";

import React, { useEffect, useState } from "react";
import "@/public/scss/photo.scss";
import { useInView } from "react-intersection-observer";

const Activity = ({
  initialPhotos,
  folder,
}: {
  initialPhotos: { cat: string; folder: string; url: string }[];
  folder: string;
}) => {
  const [page, setPage] = useState(0);
  const [photos, setPhotos] = useState(initialPhotos);
  const [zoomInPohtoURL, setZoomInPhotoURL] = useState("");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [ref, inView] = useInView();
  async function loadMorePhotos() {
    const next = page + 1;
    const res = await fetch(
      `http://localhost:3000/api/photo/${folder}?page=${next}`
    );
    const resPhotos = await res.json();
    if (resPhotos["photos"][0]) {
      setPage(next);
      setPhotos((prev) => [
        ...(prev?.length ? prev : []),
        ...resPhotos["photos"],
      ]);
    }
  }
  useEffect(() => {
    if (inView) {
      loadMorePhotos();
    }
  }, [inView]);
  const closeZoomIn = () => {
    setZoomInPhotoURL("");
  };
  const nextPhoto = () => {
    if (photos) {
      if (photoIndex + 1 >= photos?.length) {
        setZoomInPhotoURL(photos[0]["url"]);
        setPhotoIndex(0);
      } else {
        setZoomInPhotoURL(photos[photoIndex + 1]["url"]);
        setPhotoIndex((prev) => prev + 1);
      }
    }
  };
  const prevPhoto = () => {
    if (photos) {
      if (photoIndex - 1 < 0) {
        setZoomInPhotoURL(photos[photos.length - 1]["url"]);
        setPhotoIndex(photos.length - 1);
      } else {
        setZoomInPhotoURL(photos[photoIndex - 1]["url"]);
        setPhotoIndex((prev) => prev - 1);
      }
    }
  };
  return (
    <>
      <div
        className="activity-zoom-in"
        style={{
          visibility: zoomInPohtoURL ? "visible" : "hidden",
          display: zoomInPohtoURL ? "flex" : "none",
        }}
      >
        <div className="zoom-in-container">
          <div>
            <img
              src={zoomInPohtoURL}
              style={{ transform: zoomInPohtoURL ? "scale(1)" : "scale(0)" }}
            ></img>
            <button className="btn right" onClick={nextPhoto}>
              {">"}
            </button>
            <button className="btn left" onClick={prevPhoto}>
              {"<"}
            </button>
          </div>
          <button onClick={closeZoomIn} className="btn close">
            X
          </button>
        </div>
      </div>

      {photos[0] && (
        <div className="activity-header">
          <div className="activity-info">
            <ul>
              <li>{photos[0].cat}</li>
            </ul>
          </div>
          <h1 className="activity-title">{photos[0].folder}</h1>
        </div>
      )}
      <div className="photo-list">
        {photos?.map((photo, index) => (
          <div
            className="photo-list-item"
            key={index}
            onClick={() => {
              setPhotoIndex(
                photos.findIndex((Info) => Info["url"] === photo["url"])
              );
              setZoomInPhotoURL(photo["url"]);
            }}
          >
            <a>
              <figure>
                <img src={photo["url"]} alt="photo-item" loading="lazy" />
              </figure>
            </a>
          </div>
        ))}
      </div>
      <div ref={ref}></div>
    </>
  );
};

export default Activity;
