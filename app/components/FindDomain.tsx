import Image from "next/image";
import Badge from "./Badge";

const tags = [".Com $6.99", ".Net $6.99", ".Org $6.99", ".Info $6.99"];

export default function FindDomain() {
  return (
    <section className="bg-primary relative text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10  lg:gap-6">
        <div className="w-full flex flex-col justify-center  my-auto gap-6 ">
          <h1 className="h2 capitalize leading-tight ">
            Find your domain <br /> name{" "}
          </h1>
          <p className="pr-10">
            Choosing the perfect domain name is a crucial in establishing your
            online presence, your domain name more than hosting.
          </p>
          <div className="bg-primary-light  p-2 rounded-full text-lg w-fit flex items-center justify-center">
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
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/images/domain1-shape.png"}
            width={500}
            height={500}
            alt="Domain Shape"
            className="absolute right-0 top-0 w-[60%] object-contain "
          />
          <Image
            src={"/images/domain1-image.png"}
            width={500}
            height={500}
            alt="Domain Shape"
            className="lg:w-[80%] object-contain z-20 "
          />
        </div>
      </div>
    </section>
  );
}
