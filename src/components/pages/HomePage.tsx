import Navbar from "@/components/Navbar";
import Hero from "@/components/home-page/Hero";
import Stats from "@/components/home-page/Stats";
import LiveAuctions from "../home-page/LiveAuctions";
import FeaturedProducts from "../home-page/FeaturedProducts";
import WhyChooseUs from "../home-page/WhyChooseUs";
import Footer from "../Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
       <Stats />
       <LiveAuctions/>
       <FeaturedProducts/>
       <WhyChooseUs/>
       <Footer/>
    </div>
  );
}

export default HomePage;
