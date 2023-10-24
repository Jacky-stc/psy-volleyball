import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET(req: Request, res: Response) {
  console.log("get request");
  try {
    const getPlayerInfo = await query({
      query: "SELECT * FROM player",
      values: [],
    });
    const playerInfo = JSON.stringify(getPlayerInfo);
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
