import React from "react";
import "@/public/scss/member.scss";
import Link from "next/link";

const page = () => {
  const semesterList = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111];
  return (
    <main>
      <div className="m-inner">
        <div className="member-header">
          <h1 className="heading-2 member-header-title">
            <span className="en">member</span>
            <span className="ch">
              <span>歷屆成員</span>
            </span>
          </h1>
          <figure className="member-figure">
            <img src="/member_figure.jpg" alt="member figure" />
          </figure>
        </div>
        <section className="semester">
          <h2>學年度列表</h2>
          <div className="semester-btn-list">
            {semesterList.map((semester) => (
              <Link href={`/member/semester${semester}`}>
                <button className="semester-btn">
                  <span className="text">{semester}學年度</span>
                  <span> ···▶</span>
                </button>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
