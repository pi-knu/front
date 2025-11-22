import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

import {
  Search,
  Gavel,
  Store,
  Bell,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full border-b bg-white px-6 py-3 flex items-center justify-between">
      {/* LEFT BLOCK */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
          <Gavel className="w-4 h-4 text-white" />
        </div>

        <Link to="/" className="text-xl font-semibold">
          AuctionHub
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/marketplace"
            className="text-gray-500 p-2 flex items-center gap-1 text-sm hover:bg-gray-100 hover:text-gray-900 transition rounded-lg"
          >
            <Store className="w-4 h-4 text-gray-500" />
            Marketplace
          </Link>

          <Link
            to="/auctions"
            className="flex items-center gap-2 text-gray-500 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 transition rounded-lg"
          >
            <Gavel className="w-4 h-4" />
            Auctions
            <span className="text-xs bg-white text-black px-2 py-0.5 rounded">
              Live
            </span>
          </Link>

          {/* Search Field */}
          <div className="relative w-70 ml-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />

            <Input
              placeholder="Search products, auctions..."
              className="bg-white pl-10"
            />
          </div>
        </div>
      </div>

      {/* RIGHT BLOCK (Desktop) */}
      <div className="hidden lg:flex items-center gap-10">
        <Bell className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
        <Link to="/profile" className="flex items-center gap-1">
          <User className="w-5 h-5" /> Profile
        </Link>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b shadow-lg flex flex-col gap-4 px-6 py-4 lg:hidden">
          <Input placeholder="Search..." className="bg-white" />

          <Link to="/marketplace" className="flex items-center gap-2 text-gray-500">
            <Store className="w-4 h-4" /> Marketplace
          </Link>

          <Link
            to="/auctions"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg w-fit"
          >
            <Gavel className="w-4 h-4" />
            Auctions
            <span className="text-xs bg-white text-black px-2 py-0.5 rounded">
              Live
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Link to="/profile" className="flex items-center gap-1">
              <User className="w-5 h-5" /> Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
