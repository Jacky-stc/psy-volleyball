import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get update photo request");
  try {
    const client = new S3Client({
      region: process.env.AWSregion || "",
      credentials: {
        accessKeyId: process.env.accessKeyId || "",
        secretAccessKey: process.env.secretAccessKey || "",
      },
    });
    const command = new ListObjectsV2Command({
      Bucket: "psy-volleyball",
      Prefix: `photo/`,
      //   MaxKeys: 1,
    });
    const { Contents } = await client.send(command);
    const getDbData = await query({
      query: "SELECT * FROM photo",
      values: [],
    });
    const dbData = JSON.parse(JSON.stringify(getDbData));
    const s3Photos = Contents?.map((photo) => {
      const photoInfo: string[] | undefined = photo.Key?.split("/");
      if (photoInfo) {
        const category = photoInfo[1];
        const folder = photoInfo[2];
        const name = photoInfo[3];
        if (name) {
          return [category, folder, name];
        }
      }
    });
    const dbPhotoNames = dbData.map((photo: { url: string }) => {
      return photo.url;
    });
    const missingPhotos = s3Photos?.filter(
      (photo) =>
        photo !== undefined &&
        !dbPhotoNames.includes(
          `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/photo/${photo[0]}/${photo[1]}/${photo[2]}`
        )
    );
    missingPhotos?.forEach((photo) => {
      if (photo !== undefined) {
        const category = photo[0];
        const folder = photo[1];
        const image = `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/photo/${photo[0]}/${photo[1]}/${photo[2]}`;
        try {
          const updateDatabase = query({
            query: `INSERT INTO photo(cat, folder, url) VALUES(?,?,?)`,
            values: [category, folder, image],
          });
        } catch (error) {
          console.log(error);
        }
      }
    });

    return NextResponse.json(
      { message: "successfully update photo table" },
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
