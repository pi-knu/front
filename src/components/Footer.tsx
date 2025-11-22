import { Gavel } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 px-6 mt-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                            <Gavel className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-lg font-semibold text-white">AuctionHub</span>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                        The premier destination for auctions<br /> 
                        and premium marketplace items.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Marketplace</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/categories" className="hover:underline">Categories</Link></li>
                        <li><Link to="/sellers" className="hover:underline">Sellers</Link></li>
                        <li><Link to="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Auctions</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/auctions" className="hover:underline">Live Auctions</Link></li>
                        <li><Link to="/upcoming" className="hover:underline">Upcoming</Link></li>
                        <li><Link to="/results" className="hover:underline">Results</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/help" className="hover:underline">Help Center</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/terms" className="hover:underline">Terms</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © 2024 AuctionHub. All rights reserved.
            </div>
        </footer>
    );
}
