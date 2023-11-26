"use client";
import React from "react";
import "@/public/scss/hamburger.scss";
import { useState } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="l-header" style={{ zIndex: menuOpen ? 10 : -1 }}>
      <div
        className={`menu btn1 ${menuOpen ? "btn-open" : ""}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <div className="icon-left"></div>
        <div className="icon-right"></div>
      </div>
      <div className={`l-nav ${menuOpen ? "nav-open" : ""}`}>
        <div className="l-nav-list">
          <a className="nav-link" href="/">
            首頁
          </a>
          <a className="nav-link" href="/member">
            歷屆成員
          </a>
          <a className="nav-link" href="/photo">
            相片紀念
          </a>
          <a className="nav-link" href="/about">
            關於我們
          </a>
        </div>
        <a className="nav-contact" href="mailto:stzuchieh@gmail.com">
          <span className="text">CONTACT</span>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox=" 0 0 18 12.002">
              <path
                d="M5492.5 13589.5h-14a2 2 0 0 1-2-2v-8a1.992 1.992 0 0 1 .367-1.157l8.354 5.573.28.185 8.632-5.758a1.993 1.993 0 0 1 .368 1.157v8a2 2 0 0 1-2.001 2Zm-7-6.6-7.831-5.222a1.972 1.972 0 0 1 .829-.181h14a1.991 1.991 0 0 1 .83.18l-7.827 5.223Z"
                transform="translate(-5476.5 -13577.498)"
                fill="#222222"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
