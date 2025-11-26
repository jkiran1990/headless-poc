import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  // Mock GraphQL resolver
  if (query.includes("heroBanner")) {
    return NextResponse.json({
      data: {
        heroBanner: {
          title: "Mocked Banner",
          description: "This data comesss from the Next.js GraphQL mock!",
          imageUrl: "/window.svg"
        }
      }
    });
  }

  return NextResponse.json(
    { errors: [{ message: "Unknown GraphQL Query" }] },
    { status: 400 }
  );
}

export function GET() {
  return NextResponse.json(
    { message: "GraphQL endpoint is active. Use POST only." },
    { status: 405 }
  );
}
