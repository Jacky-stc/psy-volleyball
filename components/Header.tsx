"use client";
import React, { useEffect, useState } from "react";
import "@/public/scss/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [scrollingUp, setScrollingUp] = useState(true);
  const [pathname, setPathname] = useState(pathName);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingUp = currentScroll < prevScroll;
      if (currentScroll > 100) {
        if (isScrollingUp) {
          setScrollingUp(true);
        } else {
          setScrollingUp(false);
        }
      }
      prevScroll = currentScroll;
    };
    if (pathName !== pathname) {
      setScrollingUp(true);
      setPathname(pathName);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);

  return (
    <header>
      <img
        src="/logo.png"
        alt="logo"
        className={scrollingUp ? "show" : "miss"}
      />
      <nav className={scrollingUp ? "show" : "miss"}>
        <ul>
          <li>
            <Link href={"/"}>首頁</Link>
          </li>
          <li>
            <Link href={"/member"}>歷屆成員</Link>
          </li>
          <li>
            <Link href={"/photo"}>照片紀念</Link>
          </li>
          <li>
            <Link href={"/about"}>關於我們</Link>
          </li>
          <button>CONTACT</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
