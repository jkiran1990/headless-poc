"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useCustomerStore } from "@/store/customerStore";
import { BillingSummary } from "@/components/dashboard/BillingSummary";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { API } from "@/lib/api";

export default function DashboardPage() {
  const router = useRouter();
  const { profile, setProfile, billing, setBilling } = useCustomerStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    try {
      setLoading(true);
      const token = Cookies.get("auth_token");
      if (!token) throw new Error("Not logged in");

      // fetch profile
      if (!profile) {
        const res = await fetch(API.profile(), {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch profile");
        setProfile(await res.json());
      }

      // fetch billing
      if (!billing) {
        const res = await fetch(API.billing(), {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch billing");
        setBilling(await res.json());
      }

      setError(null);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (!token) return router.replace("/login");

    // load data only if not in store
    if (!profile || !billing) loadData();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>Welcome to your Customer Portal</h1>
      <section style={{ marginTop: 20 }}>
        <ProfileCard profile={profile} />
      </section>
      <section style={{ marginTop: 20 }}>
        <BillingSummary billing={billing} />
      </section>
    </main>
  );
}
