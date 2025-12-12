export default function Title({ text }: { text: string }) {
  return (
    <div className="bg-primary-light/80  p-2 px-3 w-fit rounded-full uppercase tracking-widest h6 text-white">
      {text}
    </div>
  );
}
