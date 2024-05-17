"use client";

import { ArrowUpRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "../Button/Button";
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
    <Layout classNameOverride="!py-4 lg:!py-8" id="header">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <h1 className="text-xl lg:text-2xl tracking-[0.2em] font-semibold uppercase">
            Nirav Villa
          </h1>
        </div>

        <div className="hidden lg:flex gap-x-12 items-center">
          {menuItems.map((item) => (
            <p className="" key={item.id}>
              <a href={item.href ? item.href : `#${item.id}`}>{item.text}</a>
            </p>
          ))}

          {/* 
          @TODO: Add translations.
          <button onClick={handleLocaleSelect}>
            <span className="fi fi-id"></span>
          </button>
          */}

          <Button
            href="https://www.airbnb.com.au/rooms/1157674003167983926"
            isExternal
          >
            Book now
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </Button>
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
