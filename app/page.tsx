"use client";

import { SplitText } from "gsap/SplitText";
import CTA from "./components/CTA";
import Features from "./components/Features";
import FindDomain from "./components/FindDomain";
import Footer from "./components/Footer";
import Navbar from "./components/header/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Home() {
  useGSAP(() => {
    if (typeof window === "undefined") return;

    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
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
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
