import React, { useState, useEffect } from "react";
import TopNav from "./components/Navigation";
import Sidenav from "./components/Sidenav";

const GoogleTravelLayout = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  const closeSidenav = () => {
    setIsSidenavOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidenav isOpen={isSidenavOpen} onClose={closeSidenav} />
      <div className="flex-1 flex flex-col">
        <TopNav onOpenSidenav={toggleSidenav} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default GoogleTravelLayout;
