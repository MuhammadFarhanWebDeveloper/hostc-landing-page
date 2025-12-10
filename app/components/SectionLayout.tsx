import Title from "./Title";

type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
  title: string;
  heading: string;
};

export const SectionLayout = ({
  children,
  title,
  heading,
  className = "",
}: SectionLayoutProps) => {
  return (
    <div
      className={`flex flex-col justify-center py-16 relative overflow-hidden items-center gap-6  ${className}`}
    >
      <div className="z-20 mx-auto w-fit">
        <Title text={title} />
      </div>
      <h1
        dangerouslySetInnerHTML={{ __html: heading }}
        className="h2 capitalize  mx-auto text-center"
      />

      {children}
    </div>
  );
};
