"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";
import { useBreathing } from "./useBreathing";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  useGSAP(
    () => {
      // SplitText using DOM node instead of selector
      const splitHeading = new SplitText(headingRef.current, {
        type: "words",
      });

      gsap.from(splitHeading.words, {
        opacity: 0,
        x: 40,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: heroRef },
  );

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>("#left > *").forEach((child, index) => {
      gsap.from(child, {
        scrollTrigger: {
          trigger: child,
          start: "top 90%",
        },
        opacity: 0,
        x: -400,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });

    gsap.to(".breathing", {
      y: -40,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.utils.toArray<HTMLElement>(".animate-from-right").forEach((elem) => {
      gsap.from(elem, {
        x: 600,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 50%",
        },
      });
    });
  });

  useBreathing({
    heroSelector: ".hero-image",
    shapesSelector: ".shape-1, .shape-2",
    distance: 40,
    duration: 2,
  });

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className="bg-[url('/images/hero1-bg.jpg')] px-2 py-10 overflow-hidden relative text-white bg-cover bg-no-repeat w-full min-h-screen bg-[position:center_bottom]"
    >
      <div className="container mx-auto py-10  flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-6">
        <div id="left" className="w-full flex flex-col justify-center gap-6">
          <div className="text-lg bg-white/30 w-fit p-1 rounded-full px-4">
            Effortless Setup & 24/7 Expert Support
          </div>
          <h1
            ref={headingRef}
            className="leading-tight capitalize font-bold h1"
          >
            Boost your <br /> online impact <br /> with cutting edge <br /> web
            hosting
          </h1>
          <p>
            In today’s digital landscape, your website is more than just and
            place online-it’s the cornerstone of your brand’s identity. That’s
            why our web hosting services are designed give you the edge.
          </p>
          <div
            className="flex md:flex-row flex-col h6 gap-3 w-full sm:w-1/2 md:w-full
          "
          >
            <button className="btn-primary uppercase bg-secondary text-black">
              Start a free trail
            </button>
            <button className="btn-primary uppercase bg-white text-black">
              Sign up now
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <Image
            className="hero-image animate-from-right w-[70%] lg:w-[90%] relative z-10 object-contain "
            width={600}
            height={600}
            src={"/images/hero1-image.png"}
            alt="HERO Illustration"
          />
          <Image
            className="shape-2 w-[60%] lg:block hidden  z-0 absolute  -bottom-20 right-0"
            width={600}
            height={600}
            src={"/images/hero1-shape4.png"}
            alt="HERO Illustration"
          />
          <Image
            className="w-[30%] shape-1  z-0 absolute lg:block hidden  bottom-0 right-0"
            width={600}
            height={600}
            src={"/images/hero1-shape5.png"}
            alt="HERO Illustration"
          />
        </div>
      </div>
    </section>
  );
}
