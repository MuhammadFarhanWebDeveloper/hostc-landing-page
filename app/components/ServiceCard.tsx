import Image from "next/image";
type Props = {
  className?: string;
} & Service;
export default function ServiceCard(props: Props) {
  return (
    <div
      className={`bg-white max-w-[350px] p-6 mx-auto rounded-lg flex flex-col gap-6 justify-center items-start ${props.className}`}
    >
      <div className="w-fit p-5 rounded-full bg-service-bg">
        <Image
          className="w-[50px]"
          src={props.icon}
          width={120}
          height={120}
          alt={props.title}
        />
      </div>
      <div>
        <h2 className="h5 capitalize">{props.title}</h2>
      </div>
      <div>
        <p>{props.desc}</p>
      </div>
      <div>
        <button className="btn-primary bg-service-bg text-black uppercase">
          Learn more
        </button>
      </div>
    </div>
  );
}
