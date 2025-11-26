"use client";

export function ProfileCard({ profile }: any) {
  if (!profile) return null;
  return (
    <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3>Profile</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Tier:</strong> {profile.tier}</p>
    </div>
  );
}
