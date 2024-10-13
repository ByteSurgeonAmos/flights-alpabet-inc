import { Menu, Search, Plane, Building, Home, User } from "lucide-react";
const TopNav = ({ onOpenSidenav }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={onOpenSidenav}
          className="text-gray-300 hover:text-white mr-4"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex space-x-2">
          <TopNavItem icon={<Search className="w-5 h-5" />} text="Explore" />
          <TopNavItem
            icon={<Plane className="w-5 h-5" />}
            text="Flights"
            isActive={true}
          />
          <TopNavItem icon={<Building className="w-5 h-5" />} text="Hotels" />
          <TopNavItem
            icon={<Home className="w-5 h-5" />}
            text="Vacation rentals"
          />
        </div>
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
};
const TopNavItem = ({ icon, text, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-3 py-2 text-sm ${
      isActive ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-700"
    } rounded-full`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </a>
);
export default TopNav;
