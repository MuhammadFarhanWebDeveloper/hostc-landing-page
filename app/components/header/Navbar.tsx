"use client";
import { Mail, Menu, MessageCircleMore, Tag, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const toggleNav = () => {
    setIsNavOpened(!isNavOpened);
  };
  return (
    <div className="text-white">
      <div className="hidden lg:block bg-primary-light">
        <div className="container mx-auto items-center flex py-3 justify-between">
          <div className="flex items-center gap0">
            <Mail size={17} />
            Cotact@hostc.com
          </div>
          <div className="flex items-center gap0">
            <Tag size={17} />
            Hosting Flash Sale: Starting at $3.59/mo for a limited time{" "}
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
      <div className="bg-primary px-2">
        <nav className="flex items-center justify-between container mx-auto  py-2 ">
          <div className="logo ">
            <Image
              src={"/images/logo.png"}
              width={101}
              height={101}
              alt="HOSTC"
            />
          </div>
          <button className="lg:hidden block" onClick={toggleNav}>
            <Menu size={34} />
          </button>
          <ul
            className={` hidden lg:flex items-center justify-center gap-5 text-xl rounded-full bg-primary-light px-4 py-3`}
          >
            <li>Home</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
          <button className="hidden lg:block btn-primary h6 bg-secondary text-black transition-all hover:-translate-y-1 duration-500  uppercase">
            Get Started Now
          </button>
        </nav>
      </div>

      <div
        onClick={toggleNav}
        className={`bg-black/50 block transition-all ${isNavOpened ? "translate-x-0" : "translate-x-full"} duration-100 lg:hidden fixed inset-0 z-20`}
      ></div>
      <div
        className={`bg-primary  transition-all ${isNavOpened ? "translate-x-0" : "translate-x-full"} duration-300 w-full max-w-[400px] fixed bottom-0 top-0 right-0 z-30 p-6 flex flex-col gap-6`}
      >
        <div className="flex items-center justify-between">
          <div className="logo">
            <Image
              src={"/images/logo.png"}
              width={101}
              height={101}
              alt="HOSTC"
            />
          </div>
          <button
            onClick={toggleNav}
            className="border border-white/90 rounded-full p-2"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-5 items-center justify-between text-xl ">
          <li>Home</li>
          <li>Pages</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div>
          <div className="text-2xl font-bold">Contact Us</div>
          <ul>
            <li>+1 123 456 7890</li>
            <li>+421 Allen, Mexico 4233</li>
            <li>+Hosticconsult@com</li>
            <li>++1 123 456 7890</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
