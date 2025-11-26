"use client";

import { create } from "zustand";

interface CustomerProfile {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  tier?: string;
}

interface BillingInfo {
  currentDue?: number;
  nextDueDate?: string;
  lastPayment?: string;
}

interface CustomerState {
  profile: CustomerProfile | null;
  billing: BillingInfo | null;
  setProfile: (profile: CustomerProfile) => void;
  setBilling: (billing: BillingInfo) => void;
}

export const useCustomerStore = create<CustomerState>((set) => ({
  profile: null,
  billing: null,
  setProfile: (profile) => set({ profile }),
  setBilling: (billing) => set({ billing }),
}));
