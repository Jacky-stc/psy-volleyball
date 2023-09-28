import React from "react";
import "@/public/scss/member.scss";
import Link from "next/link";

const page = () => {
  return (
    <main>
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
        <Link href="/member/semester100">100學年度</Link>
        <br />
        <Link href="/member/semester101">101學年度</Link>
        <br />
        <Link href="/member/semester103">103學年度</Link>
        <br />
        <Link href="/member/semester104">104學年度</Link>
        <br />
        <Link href="/member/semester105">105學年度</Link>
        <br />
        <Link href="/member/semester106">106學年度</Link>
        <br />
        <Link href="/member/semester107">107學年度</Link>
        <br />
        <Link href="/member/semester108">108學年度</Link>
        <br />
        <Link href="/member/semester109">109學年度</Link>
        <br />
        <Link href="/member/semester110">110學年度</Link>
      </section>
    </main>
  );
};

export default page;
