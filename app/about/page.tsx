import React from "react";
import "@/public/scss/about.scss";

const page = () => {
  return (
    <div className="m-inner">
      <div className="about-header">
        <h1 className="heading-2 about-header-title">
          <span className="en">ABOUT</span>
          <span className="ch">
            <span>關於我們</span>
          </span>
        </h1>
        <iframe
          src="https://www.youtube.com/embed/dO9numdDTNY?si=0JwVcD-K3q7vvWmw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="about-video"
        ></iframe>
      </div>
      <main>
        <div className="about-about">
          <div className="about-body">
            <div className="about-table">
              <dl className="about-table-row">
                <dt className="title">隊伍名稱</dt>
                <dd className="data">政治大學心理系排球隊</dd>
              </dl>
              <dl className="about-table-row">
                <dt className="title">隊長</dt>
                <dd className="data">男排：蔡岳宏、女排：邱念慈</dd>
              </dl>
              <dl className="about-table-row">
                <dt className="title">成立時間</dt>
                <dd className="data">2011年5月16日</dd>
              </dl>
              <dl className="about-table-row">
                <dt className="title">練習時間</dt>
                <dd className="data">
                  每周二、三19：00-23：00，於國立政治大學綜合球場
                </dd>
              </dl>
              <dl className="about-table-row">
                <dt className="title">隊伍人數</dt>
                <dd className="data">目前活躍人數約30人左右</dd>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
