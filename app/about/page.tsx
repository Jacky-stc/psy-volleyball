import React from "react";
import "@/public/scss/about.scss";
import AboutMap from "@/components/about/AboutMap";

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
              <dl className="about-table-row">
                <dt className="title">獲獎經歷</dt>
                <dd className="data">
                  2016年北心盃女排亞軍、2019大心盃女排亞軍、2019大心盃女排最佳舉球、2019大心盃女排最佳防守
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="m-inner">
          <section className="about-place">
            <div className="about-place-title sub">
              <h2 className="heading-2">
                <span className="en">Place</span>
                <span className="ch">
                  <span>地點</span>
                </span>
              </h2>
            </div>
            <div className="about-place-body">
              <div className="about-place-item">
                <h3 className="about-place-label">
                  <span className="ch">國立政治大學</span>
                  <span className="en">NCCU</span>
                </h3>
                <div className="about-place-info">
                  <AboutMap></AboutMap>
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7232.70670986656!2d121.58316832553508!3d24.988106369827683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa79452c2f49%3A0x9e8d07508e3bf507!2z5ZyL56uL5pS_5rK75aSn5a24!5e0!3m2!1szh-TW!2stw!4v1697647374762!5m2!1szh-TW!2stw"
                    width="600"
                    height="450"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default page;
