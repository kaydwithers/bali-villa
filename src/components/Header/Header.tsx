"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { Layout } from "../Layout/Layout";

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
    <Layout classNameOverride="!py-6 lg:!py-16" id="header">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-xl lg:text-2xl tracking-[0.2em] font-semibold uppercase">
            Nirav Villa
          </h1>
        </div>

        <div className="hidden lg:flex gap-x-12">
          {menuItems.map((item) => (
            <p className="" key={item.id}>
              <a href={item.href ? item.href : `#${item.id}`}>{item.text}</a>
            </p>
          ))}

          <button onClick={handleLocaleSelect}>
            <span className="fi fi-id"></span>
          </button>
        </div>

        <div className="block lg:hidden">
          <button onClick={handleMenuClick}>
            <Bars3Icon className="inline-block h-8 w-8" title="Open menu" />
          </button>
        </div>
      </div>
    </Layout>
  );
};
