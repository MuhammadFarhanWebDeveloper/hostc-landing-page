import { Star } from "lucide-react";
import Image from "next/image";

export default function TrustSection() {
  const logos = [
    { src: "/images/brand1-logo1.png", alt: "Coinbase" },
    { src: "/images/brand1-logo2.png", alt: "Spotify" },
    { src: "/images/brand1-logo3.png", alt: "Slack" },
    { src: "/images/brand1-logo4.png", alt: "Dropbox" },
    { src: "/images/brand1-logo6.png", alt: "Webflow" },
    { src: "/images/brand1-logo7.png", alt: "Zoom" },
  ];

  return (
    <div className="text-center py-16 flex flex-col gap-3">
      <h1 className="h4">Hosting solution trusted by 3,000,000 domains.</h1>

      <div className="flex flex-wrap gap-1 items-center justify-center text-sm md:text-base">
        <span>Excellent Review</span>
        <div className="flex gap-1">
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

      <ul className="flex gap-4 items-center  justify-center">
        {logos.map((logo, index) => (
          <li key={index} className="">
            <Image
              width={100}
              height={100}
              src={logo.src}
              alt={logo.alt}
              className="w-[120px] h-auto "
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
