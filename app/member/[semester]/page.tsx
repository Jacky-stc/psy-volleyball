import Profile from "@/components/member/Profile";
import "@/public/scss/semester.scss";

async function getPlayerInfo() {
  const res = await fetch("http://localhost:3000/api/player");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }: { params: { semester: string } }) => {
  const semesterYear = params.semester.slice(8, 11);
  const playerInfo = await getPlayerInfo();
  const playerMale = JSON.parse(playerInfo["playerInfo"]).filter(
    (member: any) =>
      member["semester"] === semesterYear &&
      member["gender"] === "m" &&
      member["position"] !== "m"
  );
  const playerFemale = JSON.parse(playerInfo["playerInfo"]).filter(
    (member: any) =>
      member["semester"] === semesterYear &&
      member["gender"] === "f" &&
      member["position"] !== "m"
  );
  const playerAssistance = JSON.parse(playerInfo["playerInfo"]).filter(
    (member: any) =>
      member["semester"] === semesterYear && member["position"] === "m"
  );
  // console.log(playerMale, playerFemale, playerAssistance);
  const positionList = {
    oh: "大砲",
    op: "副攻",
    mb: "欄中",
    s: "舉球",
    f: "自由",
    m: "球經",
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
          {playerMale.map((p: any) => (
            <div className="personal-profile">
              <div
                className="personal-profile-photo"
                style={{ backgroundImage: `url(${p["image"]})` }}
              ></div>
              <h2>{p["name"]}</h2>
              <ul>
                <li>{positionList[p["position"]]}</li>
              </ul>
            </div>
          ))}
        </div>
        {playerFemale[0] && (
          <div className="semester-body-header">
            <h2 className="semester-body-title">女排</h2>
          </div>
        )}
        <div className="semester-body">
          {playerFemale.map((p: any) => (
            <div className="personal-profile">
              <div
                className="personal-profile-photo"
                style={{ backgroundImage: `url(${p["image"]})` }}
              ></div>
              <h2>{p["name"]}</h2>
              <ul>
                <li>{positionList[p["position"]]}</li>
              </ul>
            </div>
          ))}
        </div>
        {playerAssistance[0] && (
          <div className="semester-body-header">
            <h2 className="semester-body-title">球經</h2>
          </div>
        )}
        <div className="semester-body">
          {playerAssistance.map((p: any) => (
            <div className="personal-profile">
              <div
                className="personal-profile-photo"
                style={{ backgroundImage: `url(${p["image"]})` }}
              ></div>
              <h2>{p["name"]}</h2>
              <ul>
                <li>{positionList[p["position"]]}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
