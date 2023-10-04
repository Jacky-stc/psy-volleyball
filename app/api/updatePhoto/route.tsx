import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { S3 } from "@aws-sdk/client-s3";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get request");
  try {
    AWS.config.update({
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
      region: process.env.AWSregion,
    });
    const s3 = new S3();
    const params = {
      Bucket: "psy-volleyball",
      Prefix: "photo/",
    };
    const data = await s3.listObjectsV2(params);
    const getDbData = await query({
      query: "SELECT * FROM photo",
      values: [],
    });
    const dbData = JSON.parse(JSON.stringify(getDbData));
    const s3Photos = data.Contents?.map((photo) => {
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
    const dbPhotoNames = dbData.map((photo: Array<object>) => {
      return photo["url"];
    });
    const missingPhotos = s3Photos?.filter(
      (photo) =>
        photo !== undefined &&
        !dbPhotoNames.includes(
          `https://psy-volleyball.s3.ap-northeast-1.amazonaws.com/photo/${photo[0]}/${photo[1]}/${photo[2]}`
        )
    );
    console.log(missingPhotos);
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
