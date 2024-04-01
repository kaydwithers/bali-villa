"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";

interface IMenuItems {
  id: string;
  text: string;
  href: string;
}

export const menuItems: IMenuItems[] = [
  {
    id: "gallery",
    text: "Gallery",
    href: "",
  },
  {
    id: "about",
    text: "About",
    href: "",
  },
  {
    id: "map",
    text: "Map",
    href: "",
  },
  {
    id: "contact",
    text: "Contact",
    href: "",
  },
];

export const Header = () => {
  const handleMenuClick = () => {};

  const handleLocaleSelect = () => {};

  return (
    <div className="flex items-center justify-between w-full px-4 py-6 lg:px-24 lg:py-16">
      <div className="">
        <h1 className="text-xl lg:text-4xl font-bold">Logo</h1>
      </div>

      <div className="hidden lg:flex gap-x-12">
        {menuItems.map((item) => (
          <p className="" key={item.id}>
            <a href={item.href ? item.href : `#${item.id}`}>{item.text}</a>
          </p>
        ))}

        <button className="text-2xl" onClick={handleLocaleSelect}>
          🇮🇩
        </button>
      </div>

      <div className="block lg:hidden">
        <button onClick={handleMenuClick}>
          <Bars3Icon className="inline-block h-8 w-8" title="Open menu" />
        </button>
      </div>
    </div>
  );
};
