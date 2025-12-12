import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        width={200}
        height={200}
        alt="Loading Icon"
        src={"/images/preloader-icon1.png"}
        className="w-[200px] h-[200px] animate-spin "
      />
    </div>
  );
}
