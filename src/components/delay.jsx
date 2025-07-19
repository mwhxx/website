import React, { useState, useEffect, Suspense } from "react";

export default function Delay({
  fallback,
  children,
  delay = 5000, // ms
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // If we’re still in the “minimum delay” window, keep showing the fallback
  if (!ready) return fallback;

  // Otherwise behave exactly like a normal Suspense
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
