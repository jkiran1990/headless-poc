import { API } from "@/lib/api";
import { http, HttpResponse } from "msw";

export const restServer = [
  http.post(API.login(), async ({ request }) => {
    const body = await request.json();

    if (body.username === "admin" && body.password === "pass") {
      return HttpResponse.json({ success: true, token: "mock-token" });
    }

    return HttpResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  }),
];
