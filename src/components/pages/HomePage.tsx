import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LiveAuctions from "../LiveAuctions";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Stats />
       <LiveAuctions/>
    </div>
  );
}

export default HomePage;
