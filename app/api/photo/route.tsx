import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get request");
  try {
    const getPhotoList = await query({
      query: "SELECT * FROM photo",
      values: [],
    });
    // console.log(getPlayerInfo);
    const photoList = JSON.stringify(getPhotoList);
    // console.log(playerInfo);
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
