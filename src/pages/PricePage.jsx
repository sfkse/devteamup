import EmailSection from "../components/EmailSection";
import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import PriceCards from "../components/PriceCards";
import Footer from "../components/Footer";
import { useRef } from "react";

function PricePage() {
  const ref = useRef(null);

  const handleClickJoinWaitlist = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <HeaderSection />
      <EmailSection ref={ref} />
      <PriceCards handleClickJoinWaitlist={handleClickJoinWaitlist} ref={ref} />
      <Footer />
    </>
  );
}

export default PricePage;

