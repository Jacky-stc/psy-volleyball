import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get request");
  try {
    AWS.config.update({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      region: process.env.AWSregion,
    });
    const s3 = new AWS.S3();
    const params = {
      Bucket: "psy-volleyball",
      Prefix: "player/",
    };
    const data = await s3.listObjectsV2(params).promise();
    const getDbData = await query({
      query: "SELECT * FROM player",
      values: [],
    });
    const dbData = JSON.parse(JSON.stringify(getDbData));
    const s3Players = data.Contents?.map((player) => {
      const playerInfo: string[] | undefined = player.Key?.slice(11, -4).split(
        "-"
      );
      const semester = player.Key?.slice(7, 10);
      if (playerInfo) {
        return [...playerInfo, semester];
      }
    });

    const dbPlayerNames = dbData.map((player: Array<object>) => {
      return player["name"];
    });
    const missingPlayer = s3Players?.filter(
      (player) => !dbPlayerNames.includes(player[0]) && player[0] !== ""
    );
    console.log(missingPlayer);
    // missingPlayer?.forEach((player) => {
    //   const name = player[0];
    //   const position = player[1];
    //   const gender = player[2];
    //   const semester = player[3];
    //   const image = `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/player/${semester}/${name}-${position}-${gender}.jpg`;
    //   if (name) {
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
    return NextResponse.json(
      { message: "successfully update database" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "get request fail", error: error },
      { status: 500 }
    );
  }
}
