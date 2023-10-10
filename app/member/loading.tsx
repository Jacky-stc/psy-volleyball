import React from "react";
// import "@/public/scss/loading.scss";
import Link from "next/link";

const loading = () => {
  return (
    <>
      <header>
        <img src="/logo.png" alt="logo" />
        <nav>
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
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading</h1>
      </div>
    </>
  );
};

export default loading;
