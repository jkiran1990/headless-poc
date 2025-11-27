"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Grid } from "@mui/material";
import { loginAction } from "@/app/login/action";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await loginAction(username, password);

    if (!result.success) {
      setError(result.error || "Login failed");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
    setLoading(false);
  }

  return (
    <><form onSubmit={handleLogin} style={{ display: "grid", gap: 12, width: 280 }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      </form>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <div>xs=6 md=8</div>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <div>xs=6 md=4</div>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <div>xs=6 md=4</div>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <div>xs=6 md=8</div>
        </Grid>
      </Grid>
  </>
  );
}
