"use client";

import { useState } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { useScreenSize } from "@/utils/useScreenSize";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  
    const screenSize = useScreenSize();
    useEffect(() => {
      const checkScreenSize = () => {
        setIsMobile(screenSize.width < 768);
      };
  
      if(screenSize.width > 768) {
        setIsMenuOpenMobile(false);
      }
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }, [screenSize.width]);


  return (
    <div className="flex flex-col min-h-screen relative">
      <NavBar
        isMenuOpenMobile={isMenuOpenMobile}
        setIsMenuOpenMobile={setIsMenuOpenMobile}
        isMobile={isMobile}
      />
      {isMenuOpenMobile === false && (
        <>
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}
