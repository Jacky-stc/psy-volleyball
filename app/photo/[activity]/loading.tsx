import React from "react";
// import "@/public/scss/loading.scss";
import Link from "next/link";

const loading = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "10rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "min(8.167vw, 240px)",
          marginBottom: "min(12.167vw, 360px)",
        }}
      >
        <h1>Loading</h1>
        <h1>test gpg key</h1>
      </div>
    </>
  );
};

export default loading;
