import Image from "next/image";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { SectionLayout } from "./SectionLayout";
const services: Service[] = [
  {
    title: "VPS Hosting",
    desc: "Virtual Private Server (VPS) hosting is a powerful solution for businesses and individuals who need more an control.",
    icon: "/images/service1-icon1.svg",
  },
  {
    title: "Shared Hosting",
    desc: "In shared hosting, multiple websites are hosted on a single server, sharing the server's resources such as CPU.",
    icon: "/images/service1-icon2.svg",
  },
  {
    title: "Cloud Hosting",
    desc: "Cloud hosting is a modern and highly scalable web hosting solution that to utilizes a network of virtual servers.",
    icon: "/images/service1-icon3.svg",
  },
];
export default function Services() {
  return (
    <SectionLayout
      title="Our Services"
      heading="Discover all our <br /> web hosting <br /> services"
      className="bg-service-bg"
    >
      <Image
        width={500}
        height={500}
        alt="WaveLines"
        className=" absolute top-0 right-0"
        src={"/images/service1-shape2.png"}
      />

      <div className="grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-4 container/10 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </SectionLayout>
  );
}
