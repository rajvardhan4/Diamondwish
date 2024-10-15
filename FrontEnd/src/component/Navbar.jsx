import { Search, Heart, ShoppingBag, User, Phone, Video, MessagesSquare, Mail, Menu } from 'lucide-react';
import { useState } from 'react';
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-sans font-RoboFont">
      {/* Top banner */}
      <div className="bg-[#4B4537] text-white text-sm py-2 fixed top-0 left-0 right-0 z-50 px-4 flex justify-between items-center hidden md:flex">
        <div className="flex space-x-4">
          <span className="flex items-center">
            <MessagesSquare size={16} className="mr-1" />
          </span>
          <span className="flex items-center">
            <Mail size={16} className="mr-1" /> Email
          </span>
        </div>
        <div>Fall Sale - 25% off Sitewide</div>
      </div>

      {/* Main header */}
      <div className="bg-white py-4 md:py-8 px-6 flex justify-between items-center  md:mt-5 w-full z-40">
        {/* Logo and Phone/Virtual Appointment */}
        <div className="flex items-center space-x-4">
          <Phone size={20} />
          <span className="text-sm hidden md:inline-block">1-855-368-2837</span>
          <Video size={16} className="ml-4 hidden md:inline-block" />
          <span className="text-dark text-sm hidden md:inline-block">
            Virtual Appointment
          </span>
        </div>

        {/* Logo */}
        <div className="text-2xl md:text-3xl font-serif">
          <img
            src="https://www.diamondwish.com/images/logo.svg"
            className="w-[200px] md:w-[305px]"
            alt="DiamondWish Logo"
          />
        </div>

        {/* Hamburger Icon for Mobile, Search, Heart, Shopping Bag, and User */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <Search size={20} />
            <Heart size={20} />
            <ShoppingBag size={20} />
            <User size={20} />
          </div>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-3/4 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-gray-600">
          <ImCross />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4 text-sm">
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            ENGAGEMENT RINGS
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            WEDDING RINGS
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            DIAMONDSss
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            GEMSTONES
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            JEWELRY
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            GIFTS
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            ABOUT
          </li>
          <li className="cursor-pointer text-gray-600 font-bold hover:text-gray-500">
            DEALS
          </li>
        </ul>
      </div>

      {/* Navigation for desktop */}
      <nav className="bg-white border-t border-b border-gray-200 hidden md:block">
        <ul className="flex justify-center space-x-8 py-4 text-sm">
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            ENGAGEMENT RINGS
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            WEDDING RINGS
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            DIAMOND
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            GEMSTONES
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            JEWELRY
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            GIFTS
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            ABOUT
          </li>
          <li className="cursor-pointer text-gray-600 font-[500] hover:text-gray-500">
            DEALS
          </li>
        </ul>
      </nav>
    </header>
  );
}
