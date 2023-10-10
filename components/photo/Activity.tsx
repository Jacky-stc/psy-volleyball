"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "@/public/scss/photo.scss";

const Activity = () => {
  const [page, setPage] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useParams();

  useEffect(() => {
    async function getPhotos() {
      const data = await fetch(
        `http://localhost:3000/api/photo/${router["activity"]}?page=${page}`
      );
      const json = await data.json();
      setPhotos([...photos, ...json["photos"]]);
      // setIsLoading(false);
    }
    getPhotos();
    console.log(photos, "photos");
  }, [page]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("intersecting");
          setPage((prevPage) => prevPage + 1);
        } else {
          return;
        }
      },
      { threshold: 1 }
    );
    observer.observe(document.querySelector("footer"));
  }, []);
  return (
    <>
      {photos[0] && (
        <div className="activity-header">
          <div className="activity-info">
            <ul>
              <li>{photos[0]["cat"]}</li>
            </ul>
          </div>
          <h1 className="activity-title">{photos[0]["folder"]}</h1>
        </div>
      )}
      <div className="photo-list">
        {photos.map((photo, index) => (
          <div className="photo-list-item" key={index}>
            <a>
              <figure>
                <img src={photo["url"]} alt="photo-item" loading="lazy" />
              </figure>
            </a>
          </div>
        ))}
      </div>
      <a href="/about">
        <div id="trigger">trigger</div>
      </a>
    </>
  );
};

export default Activity;
