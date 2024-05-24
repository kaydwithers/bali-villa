"use client";

import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../Button/Button";
import { Fragment, useState } from "react";
import { Layout } from "../Layout/Layout";
import { Logo } from "../Logo/Logo";

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
    id: "contact",
    text: "Contact",
    href: "",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLocaleSelect = () => {};

  return (
    <Layout classNameOverride="!py-4 lg:!py-8" id="header">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <Logo></Logo>
        </div>

        <div className="hidden lg:flex gap-x-14 items-center">
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

          <Transition show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-hidden"
              onClose={handleMenuClick}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="absolute inset-0 bg-black/75 transition-opacity"></Dialog.Overlay>
                </Transition.Child>

                <div className="pointer-events-none fixed inset-y-0 flex max-w-full left-0 pr-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-primary py-6 shadow-xl">
                        <div className="px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-xl lg:text-2xl tracking-[0.2em] font-semibold uppercase">
                              <Logo />
                            </Dialog.Title>

                            <div className="flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md"
                                onClick={handleMenuClick}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex flex-1 flex-col px-6">
                          <ul className="flex flex-col gap-y-8 mb-6">
                            {menuItems.map((item) => (
                              <li className="text-xl" key={item.id}>
                                <a
                                  href={item.href ? item.href : `#${item.id}`}
                                  onClick={handleMenuClick}
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}

                            <li className="mt-4">
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
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </Layout>
  );
};
