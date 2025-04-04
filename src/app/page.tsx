"use client";

import Link from "next/link";
import Navbar from "./_components/navbar";
import { useEffect, useState } from "react";
import AboutSection from "./_components/about_section";
import ProjectSection from "./_components/projects_section";
import ContactSection from "./_components/contacts_section";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function HomePage() {
  useEffect(() => {
    //   const anchors =
    //     document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");

    //   anchors.forEach((anchor) => {
    //     anchor.addEventListener("click", function (e: Event) {
    //       e.preventDefault();

    //       const targetId = (this as HTMLAnchorElement)
    //         .getAttribute("href")!
    //         .substring(1);
    //       const targetElement = document.getElementById(targetId);

    //       if (targetElement) {
    //         targetElement.scrollTo({
    //           top: targetElement.offsetTop - 64,
    //           behavior: "smooth",
    //         });
    //       }
    //     });
    //   });

    //   return () => {
    //     anchors.forEach((anchor) => {
    //       anchor.removeEventListener("click", function (e: Event) {}); // Cleanup event listeners
    //     });
    //   };
    const handleAnchorClick = (event: Event) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement)
        .getAttribute("href")!
        .substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 64, // Offset navbar height (adjust if needed)
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const searchParams = useSearchParams();
  const contactSubmit = searchParams.get("contact_submit");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && contactSubmit === "true") {
      toast("Looking forward to be part of your team.");

      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, [hasMounted, contactSubmit]);

  return (
    <main className="bg-white pt-16 text-black">
      <Navbar />
      <div>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </main>
  );
}
