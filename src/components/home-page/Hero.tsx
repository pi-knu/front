import { Gavel } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-center py-14 md:py-20 px-4 md:px-6">
      <div className="inline-block mb-4 text-xs md:text-sm px-3 md:px-4 py-1 bg-gray-100 rounded-full border">
        Premium Marketplace & Auctions
      </div>

      <h1 className="text-3xl md:text-6xl font-bold max-w-lg  mx-auto leading-tight">
        Discover Luxury, <br className="hidden md:block" /> Win at Auction
      </h1>

      <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base max-w-lg mx-auto">
        The premier destination for luxury goods, rare collectibles, and exclusive auctions.
        Join thousands of collectors and find your next treasure.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8">

        <button className="px-4 py-2 bg-black text-white rounded-md text-sm sm:text-base 
  transition hover:bg-gray-800">
          Explore Marketplace →
        </button>

        <button className="px-4 py-2 border rounded-md flex items-center justify-center gap-2 
  text-sm sm:text-base transition hover:bg-gray-100">
          <Gavel className="w-4 h-4" />
          Live Auctions
        </button>

      </div>
    </section>
  );
}
