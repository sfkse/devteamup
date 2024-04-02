import ActionSection from "../components/ActionSection";
import CardsSection from "../components/CardsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardsSection />
      <FeaturesSection />
      <ActionSection />
      <Footer />
    </>
  );
}

export default HomePage;

