import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LiveAuctions from "../LiveAuctions";
import FeaturedProducts from "../FeaturedProducts";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Stats />
       <LiveAuctions/>
       <FeaturedProducts/>
    </div>
  );
}

export default HomePage;
