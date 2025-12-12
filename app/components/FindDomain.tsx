"use client";
import Image from "next/image";
import Badge from "./Badge";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useBreathing } from "./useBreathing";

const tags = [".Com $6.99", ".Net $6.99", ".Org $6.99", ".Info $6.99"];

export default function FindDomain() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // Scroll animations for left side content
  useGSAP(
    () => {
      if (!leftRef.current) return;

      gsap.utils
        .toArray<HTMLElement>(leftRef.current.children)
        .forEach((child, index) => {
          gsap.from(child, {
            opacity: 0,
            y: 50,
            duration: 0.7,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: child,
              start: "top 90%",
            },
          });
        });
    },
    { scope: sectionRef },
  );

  // Breathing animation for right images
  useBreathing({
    heroSelector: ".domain-main-image",
    shapesSelector: ".domain-shape",
    distance: 30,
    duration: 2,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-primary relative text-white p-8 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
        {/* LEFT TEXT & INPUT */}
        <div
          ref={leftRef}
          className="w-full flex flex-col justify-center my-auto gap-6"
        >
          <h1 className="h2 capitalize leading-tight">
            Find your domain <br /> name
          </h1>
          <p className="pr-10">
            Choosing the perfect domain name is crucial in establishing your
            online presence, your domain name matters more than hosting.
          </p>
          <div className="bg-primary-light p-2 rounded-full text-lg w-fit flex items-center justify-center">
            <input
              type="text"
              placeholder="Find Your Domain"
              className="text-lg outline-none text-white placeholder:text-white px-3 w-[90%] border-none font-semibold"
            />
            <button className="btn-primary bg-secondary text-black">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-start">
            {tags.map((tag) => (
              <Badge text={tag} key={tag} />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div
          ref={rightRef}
          className="w-full flex justify-center items-center relative"
        >
          <Image
            src={"/images/domain1-shape.png"}
            width={500}
            height={500}
            alt="Domain Shape"
            className="domain-shape  absolute -right-24 top-1/3 w-full object-contain"
          />
          <Image
            src={"/images/domain1-image.png"}
            width={500}
            height={500}
            alt="Domain Illustration"
            className="domain-main-image animate-from-right lg:w-[80%] object-contain z-20"
          />
        </div>
      </div>
    </section>
  );
}
