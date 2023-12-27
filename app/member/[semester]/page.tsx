import { query } from "@/lib/db";
import "@/public/scss/semester.scss";
import React from "react";

const page = async ({ params }: { params: { semester: string } }) => {
  if (!process.env.URL) {
    return null;
  }
  type PositionList = {
    [key: string]: string;
  };
  const playerInfoDB = await query({
    query: "SELECT * FROM player",
    values: [],
  });
  const semesterYear = params.semester.slice(8, 11);
  const playerInfoString = JSON.stringify(playerInfoDB);
  const playerMale = JSON.parse(playerInfoString).filter(
    (member: any) =>
      member["semester"] === semesterYear &&
      member["gender"] === "m" &&
      member["position"] !== "m"
  );
  const playerFemale = JSON.parse(playerInfoString).filter(
    (member: any) =>
      member["semester"] === semesterYear &&
      member["gender"] === "f" &&
      member["position"] !== "m"
  );
  const playerAssistance = JSON.parse(playerInfoString).filter(
    (member: any) =>
      member["semester"] === semesterYear && member["position"] === "m"
  );
  const positionList: PositionList = {
    oh: "大砲",
    op: "副攻",
    mb: "欄中",
    s: "舉球",
    f: "自由",
    m: "球經",
    st: "前鋒",
  };
  return (
    <>
      <div className="semester-header">
        <h2 className="semester-title">{semesterYear}學年度</h2>
      </div>
      <div className="m-inner">
        {playerMale[0] && (
          <div className="semester-body-header">
            <h2 className="semester-body-title">男排</h2>
          </div>
        )}
        <div className="semester-body">
          {playerMale.map(
            (p: { name: string; image: string; position: string }) => (
              <div className="personal-profile">
                <div
                  className="personal-profile-photo"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h2>{p.name}</h2>
                <ul>
                  <li>{positionList[p.position]}</li>
                </ul>
              </div>
            )
          )}
        </div>
        {playerFemale[0] && (
          <div className="semester-body-header">
            <h2 className="semester-body-title">女排</h2>
          </div>
        )}
        <div className="semester-body">
          {playerFemale.map(
            (p: { name: string; image: string; position: string }) => (
              <div className="personal-profile">
                <div
                  className="personal-profile-photo"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h2>{p.name}</h2>
                <ul>
                  <li>{positionList[p.position]}</li>
                </ul>
              </div>
            )
          )}
        </div>
        {playerAssistance[0] && (
          <div className="semester-body-header">
            <h2 className="semester-body-title">球經</h2>
          </div>
        )}
        <div className="semester-body">
          {playerAssistance.map(
            (p: { name: string; image: string; position: string }) => (
              <div className="personal-profile">
                <div
                  className="personal-profile-photo"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h2>{p.name}</h2>
                <ul>
                  <li>{positionList[p.position]}</li>
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default page;
