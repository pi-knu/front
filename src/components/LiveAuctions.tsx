import { Gavel, Clock, Users, Flame } from "lucide-react";
import { Link } from "react-router-dom";

type AuctionItem = {
    id: number;
    title: string;
    image: string;
    category: string;
    seller: string;
    description: string;
    currentBid: number;
    startPrice: number;
    increase: number;
    increasePercent: number;
    bids: number;
    lastBidder: string;
    ended: boolean;
    isHot: boolean;
    timeLeft?: string;
};

export default function LiveAuctions() {
    const auctions: AuctionItem[] = [
        {
            id: 1,
            title: "Vintage Clock Submariner",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            category: "Jewelry & Watches",
            seller: "Luxury Timepieces",
            description: "A rare vintage Rolex Submariner in excellent condition.",
            currentBid: 14500,
            startPrice: 12000,
            increase: 2500,
            increasePercent: 20.8,
            bids: 2,
            lastBidder: "@collector12",
            ended: true,
            isHot: true,
            timeLeft: "Ended"
        },
        {
            id: 2,
            title: "Camera Nikon 56",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ90HcyYkzZBiGKdMIfFMA91QF5gvcnwg1nw&s",
            category: "Art & Collectibles",
            seller: "Modern Art Gallery",
            description: "Authentic limited-edition Banksy print.",
            currentBid: 22750,
            startPrice: 20000,
            increase: 2750,
            increasePercent: 13.8,
            bids: 2,
            lastBidder: "@artlover",
            ended: true,
            isHot: false,
            timeLeft: "Ended"
        }
    ];

    return (

        <section className="py-16 px-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-black" />
                    Live Auctions
                </h2>

                <Link
                    to="/marketplace"
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
                >
                    View Marketplace →
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {auctions.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 rounded-xl bg-white shadow-sm border flex flex-col"
                    >
                        <div className="relative h-70 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />

                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                                <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                    <Gavel className="w-3 h-3" />
                                    Live Auction
                                </span>

                                {item.isHot && (
                                    <span className="bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                        <Flame className="w-3 h-3 text-red-500" />
                                        Hot Bidding
                                    </span>
                                )}
                            </div>

                            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.timeLeft}
                            </div>

                            <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {item.bids} bids — last by {item.lastBidder}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="mt-4 flex flex-col ">

                            <div className="text-xs mb-1">
                                <span className="bg-gray-100 px-2 py-1 rounded-full">
                                    {item.category}
                                </span>

                                <span className="text-xs text-gray-500 ml-2">
                                    by {item.seller}
                                </span>
                            </div>

                            <h3 className="font-semibold text-lg">{item.title}</h3>

                            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                {item.description}
                            </p>

                            <div className="mt-3">
                                <p className="text-gray-600 text-sm">Current Bid</p>
                                <p className="text-2xl font-bold">${item.currentBid.toLocaleString()}</p>

                                <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                                    <span>Starting Price</span>
                                    <span className="line-through">
                                        ${item.startPrice.toLocaleString()}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                                    <span>Increase</span>
                                    <span className="text-green-600">
                                        +${item.increase.toLocaleString()} ({item.increasePercent}%)
                                    </span>
                                </div>
                            </div>

                            <Link
                                to={`/auction/${item.id}`}
                                className="mt-3 w-full text-center bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-900 transition"
                            >
                                View Results
                            </Link>
                        </div>
                    </div>

                ))}

            </div>
        </section >
    );
}
