"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate Title from X
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          x: 100,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        });
      }

      // Split heading into lines
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, {
          type: "lines",
        });
        gsap.from(split.lines, {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -200 : 200),
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col justify-center py-16 relative overflow-hidden items-center gap-6 ${className}`}
    >
      <div ref={titleRef} className="z-20 mx-auto w-fit title">
        <Title text={title} />
      </div>
      <h1
        ref={headingRef}
        dangerouslySetInnerHTML={{ __html: heading }}
        className="h2 capitalize mx-auto text-center"
      />
      {children}
    </div>
  );
};
