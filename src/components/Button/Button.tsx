import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  type?: "submit";
}

export const Button = ({ children, type }: IButton) => {
  return (
    <button
      className="rounded-md bg-indigo-600 px-8 py-4 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      type={type}
    >
      {children}
    </button>
  );
};
