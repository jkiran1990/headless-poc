import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  // production real API call should be here
  // but in local dev MSW mock will override this
  if (username === "admin" && password === "pass") {
    return NextResponse.json(
      { success: true },
      {
        headers: {
          "Set-Cookie": `auth_token=demo-token; Path=/; HttpOnly; Secure; SameSite=Strict;`,
        },
      }
    );
  }

  return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
}
