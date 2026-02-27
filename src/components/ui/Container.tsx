import { clsx } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-7xl": size === "default",
          "max-w-3xl": size === "narrow",
          "max-w-[1440px]": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
