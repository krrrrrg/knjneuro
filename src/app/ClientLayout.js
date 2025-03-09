"use client";

import { useEffect } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    // AOS 초기화
    if (typeof window !== "undefined") {
      try {
        const AOS = require("aos");
        AOS.init();
      } catch (error) {
        console.error("AOS 초기화 중 오류 발생:", error);
      }
    }
  }, []);

  return <>{children}</>;
}
