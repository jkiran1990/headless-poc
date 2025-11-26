import { API } from "@/lib/api";
import { http, HttpResponse } from "msw";

export const restClient = [
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
  http.get(API.profile(), ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader?.includes('mock-token')) return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });

    return HttpResponse.json({
      id: '123',
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '+91 9876543210',
      tier: 'Gold',
    });
  }),

  http.get(API.billing(), ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader?.includes('mock-token')) return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });

    return HttpResponse.json({
      currentDue: 2345,
      nextDueDate: '2025-01-05',
      lastPayment: 1520,
    });
  }),
];
