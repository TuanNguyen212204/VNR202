"use client";

import { useEffect, useState } from "react";

/**
 * Returns true after the component is mounted on the client.
 * Used to avoid SSR/CSR mismatches when relying on browser-only state
 * (e.g. window.matchMedia for prefers-reduced-motion).
 */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}