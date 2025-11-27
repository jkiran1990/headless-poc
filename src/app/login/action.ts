"use server";

import { API } from "@/lib/api";
import { cookies } from "next/headers";

interface LoginResult {
  success: boolean;
  token?: string;
  error?: string;
}

export async function loginAction(username: string, password: string): Promise<LoginResult> {
  try {
    const res = await fetch(API.login(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || "Login failed" };
    }
    const cookieStore = await cookies();

    cookieStore.set({
        name: "auth_token",
        value: json.token,
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });
    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "Server error" };
  }
}