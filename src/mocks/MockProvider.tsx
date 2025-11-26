'use client';

import { useEffect, useState } from "react";

export default function MockProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      import("./browser").then(({ worker }) => {
        worker.start({ onUnhandledRequest: 'warn' }).then(() => setReady(true));
      });
    } else {
      setReady(true); // in prod
    }
  }, []);

  if (!ready) return <div>Loading mocks...</div>;

  return <>{children}</>;
}
