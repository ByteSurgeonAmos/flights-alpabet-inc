import {
  Search,
  Plane,
  Building,
  Home,
  TrendingUp,
  Globe,
  DollarSign,
  MapPin,
  Settings,
  MessageSquare,
  HelpCircle,
  X,
} from "lucide-react";
import React from "react";
const SideNavItem = ({ icon, text, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2 text-sm sm:text-base ${
      isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
    <span className="ml-3">{text}</span>
  </a>
);
const GoogleLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="24"
    viewBox="0 0 74 24"
  >
    <path
      fill="#4285F4"
      d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"
    />
    <path
      fill="#EA4335"
      d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"
    />
    <path
      fill="#FBBC05"
      d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z"
    />
    <path
      fill="#4285F4"
      d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"
    />
    <path fill="#34A853" d="M58 .24h2.51v17.57H58z" />
    <path
      fill="#EA4335"
      d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"
    />
  </svg>
);

const Sidenav = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      <nav
        className={`fixed left-0 top-0 bottom-0 w-64 sm:w-72 md:w-80 bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4">
          <GoogleLogo />
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-2"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
        <div className="mt-4 space-y-1">
          <SideNavItem icon={<Search />} text="Explore" />
          <SideNavItem icon={<Plane />} text="Flights" isActive={true} />
          <SideNavItem icon={<Building />} text="Hotels" />
          <SideNavItem icon={<Home />} text="Vacation rentals" />
          <SideNavItem icon={<TrendingUp />} text="Tracked flight prices" />
          <SideNavItem icon={<Globe />} text="Change language" />
          <SideNavItem icon={<DollarSign />} text="Change currency" />
          <SideNavItem icon={<MapPin />} text="Change location" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 bg-gray-800">
          <SideNavItem icon={<Settings />} text="Flights settings" />
          <SideNavItem icon={<MessageSquare />} text="Feedback" />
          <SideNavItem icon={<HelpCircle />} text="Help" />
        </div>
      </nav>
    </>
  );
};
export default Sidenav;
