import React, { useState } from "react";

import TopNav from "./components/Navigation";
import Sidenav from "./components/Sidenav";

const GoogleTravelLayout = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidenav isOpen={isSidenavOpen} onClose={() => setIsSidenavOpen(false)} />
      <div className="flex-1 flex flex-col">
        <TopNav onOpenSidenav={() => setIsSidenavOpen(true)} />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default GoogleTravelLayout;
