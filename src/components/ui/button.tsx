import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "primary-dark" | "outline" | "google";
  showArrow?: boolean;
  className?: string;
};

export default function Button({ href, onClick, children, variant = "primary", showArrow, className = "" }: ButtonProps) {
  const baseStyles = "group flex items-center justify-center gap-2 px-6 py-2 rounded-md text-sm uppercase transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-wine-hover font-raleway border-0 hover:bg-wine-hover hover:text-white",
    "primary-dark": "bg-wine-hover text-white font-raleway hover:bg-white hover:text-wine-hover",
    outline: "border border-wine/[0.35] text-wine font-sans hover:border-wine/[0.6]",
    google: "border border-wine/[0.35] text-wine font-sans hover:border-wine/[0.6]",
  };

  const content = (
    <>
      {variant === "google" && (
        <Image src="/google-icon-logo-svgrepo-com.svg" alt="Google" width={12} height={12} priority draggable={false} />
      )}
      <span>{children}</span>
      {showArrow && <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${variant === "outline" ? "group-hover:translate-x-1.5" : "group-hover:translate-x-1"}`} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}