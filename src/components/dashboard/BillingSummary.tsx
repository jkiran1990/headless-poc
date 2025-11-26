"use client";

export function BillingSummary({ billing }: any) {
  if (!billing) return null;
  return (
    <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h3>Billing Summary</h3>
      <p><strong>Current Due:</strong> ₹{billing.currentDue}</p>
      <p><strong>Next Due Date:</strong> {billing.nextDueDate}</p>
      {billing.lastPayment && <p><strong>Last Payment:</strong> ₹{billing.lastPayment}</p>}
    </div>
  );
}
