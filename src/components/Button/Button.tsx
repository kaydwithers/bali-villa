import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  href?: string;
  isExternal?: boolean;
  type?: "submit";
}

export const Button = ({ children, href, isExternal, type }: IButton) => {
  const classes =
    "flex gap-x-2 items-center rounded-md bg-indigo-600 px-8 py-4 font-semibold text-white shadow-sm hover:no-underline hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  return href ? (
    <a
      className={classes}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <button className={classes} type={type}>
      {children}
    </button>
  );
};
