import { SectionLayout } from "./SectionLayout";
import WhyChooseUsCard from "./WhyChooseUsCard";

const data: Service[] = [
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
export default function WhyChooseUs() {
  return (
    <SectionLayout
      title="Why Choose Us"
      heading="Why Choose HOSTC <br/> Hosting
    "
    >
      <div className="grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-4 container/10 mx-auto">
        {data.map((item, index) => (
          <div key={index}>
            <WhyChooseUsCard showArrow={index !== data.length - 1} {...item} />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
