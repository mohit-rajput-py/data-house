"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function ReloadOnHome() {
  const pathname = usePathname();
  const prevPath = useRef(null);

  useEffect(() => {
    // Skip the first render (no previous path yet)
    if (!prevPath.current) {
      prevPath.current = pathname;
      return;
    }

    // If navigating *to* home from another page → reload once
    if (pathname === "/" && prevPath.current !== "/") {
      window.location.reload();
    }

    prevPath.current = pathname;
  }, [pathname]);

  return null; // no UI
}
