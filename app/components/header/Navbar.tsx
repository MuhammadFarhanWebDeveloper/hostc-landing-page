"use client";

import { Mail, Menu, MessageCircleMore, Tag, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links = ["Home", "Pages", "Services", "Blogs", "Contact"];

export default function Navbar() {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const toggleNav = () => setIsNavOpened((prev) => !prev);

  // Initial navbar animation
  useGSAP(() => {
    gsap.from(".navbar-container", {
      opacity: 0,
      y: -15,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from(".nav-item", {
      opacity: 0,
      y: -10,
      stagger: 0.12,
      delay: 0.3,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  // Mobile menu animation
  useGSAP(
    () => {
      if (isNavOpened) {
        gsap.to(".mobile-menu", {
          x: 0,
          duration: 0.45,
          ease: "power3.out",
        });

        gsap.to(".backdrop", {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.3,
        });

        gsap.from(".mobile-nav-item", {
          opacity: 0,
          x: 30,
          stagger: 0.1,
          delay: 0.1,
          duration: 0.45,
          ease: "power3.out",
        });
      } else {
        gsap.to(".mobile-menu", {
          x: "100%",
          duration: 0.45,
          ease: "power3.in",
        });

        gsap.to(".backdrop", {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
      }
    },
    { dependencies: [isNavOpened] },
  );

  return (
    <div className="text-white">
      {/* TOP BAR */}
      <div className="hidden lg:block bg-primary-light">
        <div className="container mx-auto items-center flex py-3 justify-between">
          <div className="flex items-center gap0">
            <Mail size={17} />
            Cotact@hostc.com
          </div>
          <div className="flex items-center gap0">
            <Tag size={17} />
            Hosting Flash Sale: Starting at $3.59/mo
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap0">
              <MessageCircleMore size={17} />
              Live Chat
            </button>
            <button className="flex items-center gap0">
              <User size={17} />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-primary px-2">
        <nav className="navbar-container flex items-center justify-between container mx-auto py-2">
          <div className="logo">
            <Image
              src="/images/logo.png"
              width={101}
              height={101}
              alt="HOSTC"
            />
          </div>

          <button className="lg:hidden block" onClick={toggleNav}>
            <Menu size={34} />
          </button>

          <ul className="hidden lg:flex items-center gap-5 text-xl rounded-full bg-white/30 px-4 py-3">
            {links.map((link) => (
              <li key={link} className="nav-item">
                {link}
              </li>
            ))}
          </ul>

          <button className="hidden lg:block btn-primary h6 bg-secondary text-black uppercase">
            Get Started Now
          </button>
        </nav>
      </div>

      {/* BACKDROP */}
      <div
        onClick={toggleNav}
        className="backdrop bg-black/50 fixed inset-0 z-20 opacity-0 pointer-events-none lg:hidden"
      />

      {/* MOBILE MENU */}
      <div className="mobile-menu bg-primary w-full max-w-[400px] fixed bottom-0 top-0 right-0 z-30 p-6 flex flex-col gap-6 translate-x-full">
        <div className="flex items-center justify-between">
          <Image src="/images/logo.png" width={101} height={101} alt="HOSTC" />
          <button
            onClick={toggleNav}
            className="border border-white/90 rounded-full p-2"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 items-center text-xl">
          {links.map((link) => (
            <li key={link} className="mobile-nav-item">
              {link}
            </li>
          ))}
        </ul>

        <div>
          <div className="text-2xl font-bold">Contact Us</div>
          <ul>
            <li>+1 123 456 7890</li>
            <li>+421 Allen, Mexico 4233</li>
            <li>Hosticconsult@com</li>
            <li>+1 123 456 7890</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
