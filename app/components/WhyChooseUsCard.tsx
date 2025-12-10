import Image from "next/image";

type Props = { showArrow: boolean } & Service;
export default function WhyChooseUsCard(props: Props) {
  return (
    <div className="p-4  max-w-[350px] text-center relative flex flex-col justify-center items-center gap-4">
      <div className=" w-fit p-5 rounded-full bg-service-bg ">
        <Image
          className="w-[50px]"
          src={props.icon}
          width={50}
          height={50}
          alt={props.title}
        />
        {props.showArrow && (
          <Image
            className="w-[230px] h-auto absolute top-7 lg:block hidden -right-[30%] z-10"
            src={"/images/arrow.png"}
            width={520}
            height={120}
            alt={props.title}
          />
        )}
      </div>
      <div>
        <h2 className="h6 capitalize">{props.title}</h2>
      </div>
      <div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
