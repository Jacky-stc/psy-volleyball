import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get request");
  // AWS.config.update({
  //   accessKeyId: "AKIATR2UIHMXVRRO2CKY",
  //   secretAccessKey: "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",
  //   region: "ap-northeast-1",
  // });
  // const s3 = new AWS.S3();
  // const params = {
  //   Bucket: "psy-volleyball",
  //   Prefix: "player/",
  // };
  // const data = await s3.listObjectsV2(params).promise();
  // console.log(data);
  // data.Contents?.forEach((player) => {
  //   const playerInfo = player.Key?.slice(11, -4).split("-");
  //   const semester = player.Key?.slice(7, 10);
  //   const name = playerInfo ? playerInfo[0] : null;
  //   const position = playerInfo ? playerInfo[1] : null;
  //   const gender = playerInfo ? playerInfo[2] : null;
  //   const image = `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/${player.Key}`;
  //   if (name) {
  //     console.log(name, position, semester, gender);
  //     try {
  //       const updateDatabase = query({
  //         query: `INSERT INTO player(name, position, semester, gender, image) VALUES(?,?,?,?,?)`,
  //         values: [name, position, semester, gender, image],
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // });
  // console.log(updateDatabase);
  try {
    const getPlayerInfo = await query({
      query: "SELECT * FROM player",
      values: [],
    });
    // console.log(getPlayerInfo);
    const playerInfo = JSON.stringify(getPlayerInfo);
    // console.log(playerInfo);
    return NextResponse.json(
      { message: "get request ok", playerInfo: playerInfo },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "get request fail", error: error },
      { status: 500 }
    );
  }
}
