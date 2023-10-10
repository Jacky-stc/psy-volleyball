import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { query } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { folder: string } }
) {
  const searchParams = req.nextUrl.searchParams;
  const folder = params.folder;
  console.log(searchParams.get("page"), folder);
  try {
    const getPhotos = await query({
      query: "SELECT * FROM photo WHERE folder = ? LIMIT ?, 9",
      values: [folder, parseInt(searchParams.get("page") || "1") * 9],
    });
    // console.log(getPhotos);

    return NextResponse.json(
      { message: "get photos ok", photos: getPhotos },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "get request fail", error: error },
      { status: 500 }
    );
  }
}