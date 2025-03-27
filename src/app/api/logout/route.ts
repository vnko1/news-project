import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const options = {
    name: "session",
    value: "",
    maxAge: -1,
  };

  cookies().set(options);

  return NextResponse.json({}, { status: 200 });
}
