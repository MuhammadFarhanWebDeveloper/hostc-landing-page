import Image from "next/image";
import { SectionLayout } from "./SectionLayout";

export default function DataCenters() {
  return (
    <SectionLayout
      className="bg-[url('/images/data-center-bg.jpg')]  bg-cover bg-no-repeat text-white bg-black/30 bg-blend-darken"
      title="Data Center"
      heading="Our Data Center Location"
    >
      <div className="container  mx-auto min-w-[900px]  w-full h-[600px] relative">
        <Image
          width={800}
          height={400}
          alt="Data Center Map"
          src={"/images/data-center-map.png"}
          className="absolute mx-auto  w-full  h-full object-contain"
        />
        <Image
          width={800}
          height={400}
          alt="Data Center Map"
          src={"/images/center-map-border.png"}
          className="absolute mx-auto  w-full  h-full object-contain"
        />
      </div>
    </SectionLayout>
  );
}
