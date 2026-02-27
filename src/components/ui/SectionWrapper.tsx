import { clsx } from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "sand" | "dark" | "white";
  padding?: "default" | "small" | "large" | "none";
}

export function SectionWrapper({
  children,
  id,
  className,
  background = "default",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx(
        {
          "bg-warm-white": background === "default",
          "bg-sand-50": background === "sand",
          "bg-primary-900 text-white": background === "dark",
          "bg-white": background === "white",
        },
        {
          "py-10 md:py-24": padding === "default",
          "py-8 md:py-16": padding === "small",
          "py-16 md:py-32": padding === "large",
          "py-0": padding === "none",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
