import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { type NextRequest } from "next/server";

import { query } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { semester: string } }
) {
  console.log("get update player by semester request");
  try {
    const semester = params.semester;
    const client = new S3Client({
      region: process.env.AWSregion || "",
      credentials: {
        accessKeyId: process.env.accessKeyId || "",
        secretAccessKey: process.env.secretAccessKey || "",
      },
    });
    const command = new ListObjectsV2Command({
      Bucket: "psy-volleyball",
      Prefix: `player/${semester}/`,
      //   MaxKeys: 1,
    });
    const { Contents } = await client.send(command);
    const getDbData = await query({
      query: "SELECT * FROM player",
      values: [],
    });
    const dbData = JSON.parse(JSON.stringify(getDbData));
    const s3Players = Contents?.map((player) => {
      const playerInfo: string[] | undefined = player.Key?.slice(11, -4).split(
        "-"
      );
      const semester = player.Key?.slice(7, 10);
      if (playerInfo) {
        return [...playerInfo, semester];
      }
    });

    const dbPlayerNames = dbData.map((player: { name: string }) => {
      return player.name;
    });
    const missingPlayer = s3Players?.filter(
      (player: any) => !dbPlayerNames.includes(player[0]) && player[0] !== ""
    );
    missingPlayer?.forEach((player: any) => {
      const name = player[0];
      const position = player[1];
      const gender = player[2];
      const semester = player[3];
      const image = `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/player/${semester}/${name}-${position}-${gender}.jpg`;
      if (name) {
        try {
          const updateDatabase = query({
            query: `INSERT INTO player(name, position, semester, gender, image) VALUES(?,?,?,?,?)`,
            values: [name, position, semester, gender, image],
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
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
