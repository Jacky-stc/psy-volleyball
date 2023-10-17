import { Wait } from "@/lib/getData";
import React from "react";

const Carousel = async () => {
  // await Wait(5000);
  return (
    <div className="homepage-photo-carousel-container">
      <div className="homepage-photo-carousel">
        <ul className="list list-1">
          <li className="item">
            <img src="/c-1.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-2.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-3.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-4.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-5.jpg"></img>
          </li>
        </ul>
        <ul className="list list-1">
          <li className="item">
            <img src="/c-1.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-2.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-3.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-4.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-5.jpg"></img>
          </li>
        </ul>
        <ul className="list list-1">
          <li className="item">
            <img src="/c-1.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-2.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-3.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-4.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-5.jpg"></img>
          </li>
        </ul>
      </div>
      <div className="homepage-photo-carousel">
        <ul className="list list-2">
          <li className="item">
            <img src="/c-6.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-7.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-8.jpg"></img>
          </li>
          <li className="item">
            <img src="/member_figure.jpg"></img>
          </li>
          <li className="item">
            <img src="/profile.jpg"></img>
          </li>
        </ul>
        <ul className="list list-2">
          <li className="item">
            <img src="/c-6.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-7.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-8.jpg"></img>
          </li>
          <li className="item">
            <img src="/member_figure.jpg"></img>
          </li>
          <li className="item">
            <img src="/profile.jpg"></img>
          </li>
        </ul>
        <ul className="list list-2">
          <li className="item">
            <img src="/c-6.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-7.jpg"></img>
          </li>
          <li className="item">
            <img src="/c-8.jpg"></img>
          </li>
          <li className="item">
            <img src="/member_figure.jpg"></img>
          </li>
          <li className="item">
            <img src="/profile.jpg"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
