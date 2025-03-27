import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { auth } from "firebase-admin";

import { customInitApp } from "@/services/firebase/admin";
import { revalidatePath } from "next/cache";

customInitApp();

export async function POST() {
  const authorization = headers().get("Authorization");

  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];

    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });

      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };

      cookies().set(options);
    }
  }
  revalidatePath("/", "layout");
  return NextResponse.json({}, { status: 200 });
}

export async function GET() {
  const session = cookies().get("session")?.value;

  if (!session || session === "undefined")
    return NextResponse.json({ isLogged: false }, { status: 401 });

  const decodedClaims = await auth().verifySessionCookie(session, true);

  if (!decodedClaims)
    return NextResponse.json({ isLogged: false }, { status: 401 });

  return NextResponse.json(
    { isLogged: true, user: decodedClaims },
    { status: 200 }
  );
}
