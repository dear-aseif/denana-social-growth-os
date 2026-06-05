import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-denana-gold text-white shadow-sm hover:bg-denana-goldDark focus-visible:outline-denana-gold",
  secondary:
    "border border-denana-line bg-white text-denana-ink hover:border-denana-gold hover:text-denana-goldDark focus-visible:outline-denana-gold",
  ghost:
    "text-denana-muted hover:bg-denana-cream hover:text-denana-ink focus-visible:outline-denana-gold",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
