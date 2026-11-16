export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
}

export function Button({
  asChild,
  className,
  children,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}
