import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero1-bg.jpg')] px-2 relative text-white bg-cover bg-no-repeat w-full min-h-screen bg-[position:center_bottom]">
      <div className="container mx-auto py-10  flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-6">
        <div className="w-full flex flex-col justify-center gap-6">
          <div className="text-lg">Effortless Setup & 24/7 Expert Support</div>
          <h1 className="leading-tight capitalize font-bold h1">
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
        <div className="w-full ">
          <Image
            className="w-[90%] relative z-10 object-contain "
            width={600}
            height={600}
            src={"/images/hero1-image.png"}
            alt="HERO Illustration"
          />
          <Image
            className="w-[60%] lg:block hidden  z-0 absolute  -bottom-20 right-0"
            width={600}
            height={600}
            src={"/images/hero1-shape4.png"}
            alt="HERO Illustration"
          />
          <Image
            className="w-[30%]  z-0 absolute lg:block hidden  bottom-0 right-0"
            width={600}
            height={600}
            src={"/images/hero1-shape5.png"}
            alt="HERO Illustration"
          />
        </div>
      </div>
    </div>
  );
}
