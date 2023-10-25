import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get album request");
  try {
    const getPhotoList = await query({
      query:
        "SELECT folder, AMY_VALUE(cat), ANY_VALUE(url) FROM photo GROUP BY folder",
      values: [],
    });
    const photoList = JSON.stringify(getPhotoList);
    return NextResponse.json(
      { message: "get request ok", photoList: photoList },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "get request fail", error: error },
      { status: 500 }
    );
  }
}
