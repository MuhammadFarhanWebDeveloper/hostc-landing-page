import { CheckCircle, SquareCheckBig } from "lucide-react";
import Title from "./Title";
import Image from "next/image";
import AnimatedBlob from "./AnimatedBlob";

const features = [
  "100% Uptime Guarantee",
  "Fast Loading Speeds",
  "24/7 Customer Support",
  "Free Site Migration",
];
export default function Features() {
  return (
    <section className="relative overflow-hidden ">
      <div className="container mx-auto py-10  flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-6">
        <div className="w-full flex flex-col gap-6">
          <Title text="Our Features" />
          <h1 className="h2">
            HOSTC Security <br /> Features
          </h1>
          <p className="w-[80%] text-lg">
            At HOSTC, your website&apos;s security is our top priority. Features
            provide robust security features designed to protect your data and
            ensure the smooth operation of your online presence.
          </p>

          <ul className="grid  gap-4 w-[80%]  grid-cols-2 grid-rows-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex  gap-2 items-start justify-start text-wrap font-semibold text-lg capitalize"
              >
                <CheckCircle className="text-primary" size={23} />
                {feature}
              </li>
            ))}
          </ul>
          <button className="btn-primary bg-secondary text-black w-fit tracking-widest">
            Get Started Now
          </button>
        </div>
        <div className="w-full  relative flex items-start justify-center">
          <Image
            width={500}
            height={500}
            src={"/images/features1-image.png"}
            alt="Feature Image"
            className="z-10"
          />
          <AnimatedBlob
            width={400}
            height={400}
            className="text-primary/20 absolute inset-0 w-full h-full"
          />
          <Image
            width={300}
            height={300}
            src={"/images/features1-shape2.png"}
            alt="Shape"
            className="absolute top-8 -right-20 z-0 w-[460px] "
          />
        </div>
      </div>
      <Image
        width={300}
        height={300}
        src={"/images/features1-sec-shape.png"}
        alt="Shape"
        className="absolute -top-[200px] right-0 w-[380px] "
      />
    </section>
  );
}
