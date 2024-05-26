import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  href?: string;
  isExternal?: boolean;
  size?: "small" | "medium" | "large";
  type?: "submit";
}

export const Button = ({
  children,
  href,
  isExternal,
  size = "medium",
  type,
}: IButton) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-9 py-5 lg:px-12 lg:py-6 text-base lg:text-xl",
  };

  const sizeClass = sizeClasses[size];

  const classes =
    "flex gap-x-2 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white shadow-sm bg-none hover:no-underline hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  return href ? (
    <a
      className={`${classes} ${sizeClass}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <button className={`${classes} ${sizeClass}`} type={type}>
      {children}
    </button>
  );
};
