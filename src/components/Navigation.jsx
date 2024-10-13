import React, { useState } from "react";
import {
  Menu,
  Search,
  Plane,
  Building,
  Home,
  User,
  MoreHorizontal,
} from "lucide-react";

const TopNavItem = ({ icon, text, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-3 py-2 text-sm ${
      isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700"
    } rounded-full`}
  >
    {icon}
    <span className="ml-2 hidden sm:inline">{text}</span>
  </a>
);

const TopNav = ({ onOpenSidenav }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <nav className="bg-gray-800 p-2 sm:p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={onOpenSidenav}
          className="text-gray-300 hover:text-white mr-2 sm:mr-4"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex space-x-1 sm:space-x-2">
          <TopNavItem icon={<Search className="w-5 h-5" />} text="Explore" />
          <TopNavItem
            icon={<Plane className="w-5 h-5" />}
            text="Flights"
            isActive={true}
          />
          <TopNavItem icon={<Building className="w-5 h-5" />} text="Hotels" />
          <div className="sm:hidden">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-gray-300 hover:text-white px-3 py-2"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>
            {showMore && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-xl z-20">
                <TopNavItem
                  icon={<Home className="w-5 h-5" />}
                  text="Vacation rentals"
                />
                {/* Add more menu items here if needed */}
              </div>
            )}
          </div>
          <div className="hidden sm:block">
            <TopNavItem
              icon={<Home className="w-5 h-5" />}
              text="Vacation rentals"
            />
          </div>
        </div>
        <div className="flex items-center">
          <User className="w-6 h-6 text-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
