import React from "react";
import "@/public/scss/loading.scss";

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
        <span className="loader"></span>
      </div>
    </>
  );
};

export default loading;
