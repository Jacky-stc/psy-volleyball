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
          <div className="homepage-photo">
            <div className="m-inner">
              <h2 className="m-heading">
                <span className="en">Photos</span>
                <span className="ch">照片紀念</span>
              </h2>
              <div className="homepage-photo-header">
                <p className="homepage-photo-lead">以熱情澆灌興趣</p>
                <div className="homepage-photo-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia reprehenderit vero excepturi modi doloribus
                    quibusdam sequi ad amet sint debitis.
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
