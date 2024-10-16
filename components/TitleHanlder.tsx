"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TitleHanlder = () => {
  const pathname = usePathname();
  useEffect(() => {
    let title = "Dashboard - ELT Assessment";
    switch (pathname) {
      case "/dashboard":
        title = "Dashboard - ELT Assessment";
        break;
      case "/find":
        title = "Find - ELT Assessment";
        break;
      case "/inbox":
        title = "Inbox - ELT Assessment";
        break;
      case "/analytics":
        title = "Analytics - ELT Assessment";
        break;
      case "/settings":
        title = "Settings - ELT Assessment";
        break;

      default:
        title = "Dashboard - ELT Assessment";
    }
    document.title = title;
  }, [pathname]);

  return null;
};

export default TitleHanlder;
