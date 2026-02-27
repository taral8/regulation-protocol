import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-lg",
    {
      "bg-gold-500 text-primary-900 hover:bg-gold-600 hover:shadow-lg":
        variant === "primary",
      "border-2 border-stone-300 text-primary-800 hover:bg-sand-50 hover:border-gold-400":
        variant === "secondary",
      "text-gold-600 hover:text-gold-700 underline-offset-4 hover:underline":
        variant === "ghost",
    },
    {
      "px-6 py-3 text-sm": size === "default",
      "px-8 py-4 text-base": size === "large",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
