import React from "react";
import {
  Menu,
  Search,
  Plane,
  Building,
  Home,
  Moon,
  MoreVertical,
} from "lucide-react";

const NavItem = ({ icon, text, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2 text-sm ${
      isActive
        ? "text-blue-500 border-b-2 border-blue-500"
        : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);

const TopNav = ({ onOpenSidenav }) => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={onOpenSidenav} className="mr-4">
              <Menu className="h-6 w-6 text-gray-300 hover:text-white" />
            </button>
            <img src="/google.svg" alt="Google Logo" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavItem icon={<Search className="w-5 h-5" />} text="Travel" />
            <NavItem icon={<Search className="w-5 h-5" />} text="Explore" />
            <NavItem
              icon={<Plane className="w-5 h-5" />}
              text="Flights"
              isActive={true}
            />
            <NavItem icon={<Building className="w-5 h-5" />} text="Hotels" />
            <NavItem
              icon={<Home className="w-5 h-5" />}
              text="Holiday rentals"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Moon className="h-5 w-5 text-gray-300" />
            <MoreVertical className="h-5 w-5 text-gray-300" />
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
