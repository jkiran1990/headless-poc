export const API = {
  login: () => {
    if (typeof window === "undefined") {
      // Running on server
      const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      return `${base}/api/auth/login`;
    }
    // Browser side can use relative URL
    return "/api/auth/login";
  },
  profile: () => '/api/customer/profile',
  billing: () => '/api/customer/billing',
};
