export default function Badge({ text }: { text: string }) {
  return (
    <div className="w-fit  rounded-full text-lg px-3 py-1 bg-primary-light text-white">
      {text}
    </div>
  );
}
