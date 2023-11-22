import Albums from "@/components/homepage/Albums";
import Carousel from "@/components/homepage/Carousel";
import "@/public/scss/homepage.scss";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="loading-bg">
            <img src="logo.png"></img>
          </div>
        }
      >
        <div className="loading-t">
          <img src="logo.png"></img>
        </div>
        <div className="m-inner">
          <div className="homepage-header">
            <h1 className="heading-2">
              <span className="en">バレーは！ 常に上を向くスポーツだ ！</span>
              <span className="ch">
                <span>排球是永遠向上看的運動</span>
              </span>
            </h1>
          </div>
        </div>
        <div className="homepage-contents">
          <div className="notyet"></div>
        </div>
        <div className="homepage-contents">
          <div className="homepage-photo">
            <div className="m-inner homepage-photo-inner">
              <div className="homepage-photo-header">
                <div className="homepage-photo-title">
                  <p className="homepage-photo-lead">
                    <span>才華是可以栽培開花的，</span>
                    <span>靈感是可以研磨雕琢的。</span>
                  </p>
                  <h2 className="m-heading">
                    <span className="en">Photos</span>
                    <span className="ch">照片紀念</span>
                  </h2>
                </div>
              </div>
              <div className="homepage-photo-body">
                <div className="homepage-photo-list">
                  <Albums></Albums>
                  <div className="homepage-photo-list-image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-contents">
          <div className="homepage-member">
            <div className="m-inner">
              <h2 className="m-heading">
                <span className="en">members</span>
                <span className="ch">歷屆成員</span>
              </h2>
              <div className="homepage-member-header">
                <p className="homepage-member-lead">
                  所謂排球，是在網這邊的都是夥伴
                </p>
                <div className="homepage-member-body">
                  <p>
                    迄今為止，政大心理系排已創立十餘年，成員們來來去去，不求來時能帶些什麼來，只希望離開時能帶走一些什麼。
                  </p>
                  <nav>
                    <a href="/" className="m-btn"></a>
                  </nav>
                </div>
              </div>
            </div>
            <Carousel></Carousel>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
