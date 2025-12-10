import DataCenters from "./components/DataCenters";
import Features from "./components/Features";
import FindDomain from "./components/FindDomain";
import Navbar from "./components/header/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
        <Hero />
      </div>
      <TrustSection />
      <Services />
      <WhyChooseUs />
      <FindDomain />
      <Pricing />
      <DataCenters />
      <Features />
    </div>
  );
}
