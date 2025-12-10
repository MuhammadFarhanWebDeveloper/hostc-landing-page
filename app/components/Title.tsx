export default function Title({ text }: { text: string }) {
  return (
    <div className="bg-primary-light/80 font-bold p-2 px-3 w-fit rounded-full uppercase tracking-widest text-lg text-white">
      {text}
    </div>
  );
}
