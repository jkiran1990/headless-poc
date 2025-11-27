"use server";

import { cookies } from "next/headers";

interface LoginResult {
  success: boolean;
  error?: string;
}

export async function loginAction(username: string, password: string): Promise<LoginResult> {
  try {
    // 🔹 Replace this with your actual backend API call
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || "Login failed" };
    }

    // 🔹 Set HttpOnly cookie server-side
    cookies().set("auth_token", json.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "Server error" };
  }
}