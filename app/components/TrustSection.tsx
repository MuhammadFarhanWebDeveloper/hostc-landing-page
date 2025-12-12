"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);
  const logosRef = useRef<HTMLUListElement | null>(null);

  const logos = [
    { src: "/images/brand1-logo1.png", alt: "Coinbase" },
    { src: "/images/brand1-logo2.png", alt: "Spotify" },
    { src: "/images/brand1-logo3.png", alt: "Slack" },
    { src: "/images/brand1-logo4.png", alt: "Dropbox" },
    { src: "/images/brand1-logo6.png", alt: "Webflow" },
    { src: "/images/brand1-logo7.png", alt: "Zoom" },
  ];

  useGSAP(
    () => {
      // Fade in stars sequentially
      if (starsRef.current) {
        gsap.from(starsRef.current.children, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: starsRef.current,
            start: "top 85%",
          },
        });
      }

      // Slide in logos from bottom
      if (logosRef.current) {
        gsap.utils
          .toArray<HTMLElement>(logosRef.current.children)
          .forEach((logo) => {
            gsap.from(logo, {
              opacity: 0,
              y: 50,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: logo,
                start: "top 90%",
              },
            });
          });
      }
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="text-center py-16 flex flex-col gap-3">
      <h1 className="h4">Hosting solution trusted by 3,000,000 domains.</h1>

      <div className="flex flex-wrap gap-1 items-center justify-center text-sm md:text-base">
        <span>Excellent Review</span>
        <div ref={starsRef} className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} size={20} fill="blue" strokeWidth={0} />
          ))}
        </div>
        <div className="h-[20px] w-[2px] bg-gray-400 mx-2" />
        <span className="whitespace-nowrap flex items-center justify-center">
          1068 Reviews on <Star size={20} fill="blue" strokeWidth={0} />{" "}
          Trustpilot
        </span>
      </div>

      <ul
        ref={logosRef}
        className="flex items-center overflow-x-auto mx-auto scrollbar-hide"
      >
        {logos.map((logo, index) => (
          <li
            key={index}
            className="shrink-0 p-4 w-full min-[450px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-fit flex justify-center items-center"
          >
            <Image
              width={100}
              height={100}
              src={logo.src}
              alt={logo.alt}
              className="w-[120px] h-auto select-none"
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
