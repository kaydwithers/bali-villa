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
    id: "services",
    text: "Services",
    href: "",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const localeSelectHandler = () => {};

  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const handleWhatsAppClick = () => {
    event({
      action: "whatsapp_header_link",
      category: "ecommerce",
      label: "WhatsApp header link clicked",
    });
  };

  const bookNowHandler = () => {
    event({
      action: "book_now_header_button",
      category: "ecommerce",
      label: "Book now header button clicked",
    });

    window.open(
      "https://www.airbnb.com.au/rooms/1157674003167983926",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Layout classNameOverride="!py-4 lg:!py-8" id="header">
      <div className="flex items-center justify-between w-full">
        <div className="">
          <Logo />
        </div>

        <div className="hidden lg:flex gap-x-14 items-center">
          {menuItems.map((item) => (
            <p className="" key={item.id}>
              <a href={item.href ? item.href : `#${item.id}`}>{item.text}</a>
            </p>
          ))}

          {/* 
          @TODO: Add translations.
          <button onClick={localeSelectHandler}>
            <span className="fi fi-id"></span>
          </button>
          */}

          <Button clickHandler={bookNowHandler}>
            Book now
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </Button>
        </div>

        <div className="block lg:hidden">
          <button aria-label="Open menu" onClick={menuClickHandler}>
            <Bars3Icon className="inline-block h-8 w-8" role="presentation" />
          </button>

          <Transition show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-hidden"
              onClose={menuClickHandler}
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
                                aria-label="Close menu"
                                type="button"
                                className="rounded-md"
                                onClick={menuClickHandler}
                              >
                                <XMarkIcon
                                  className="h-6 w-6"
                                  role="presentation"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-10 flex flex-1 flex-col px-6">
                          <ul className="flex flex-col gap-y-8 mb-6 text-center">
                            {menuItems.map((item) => (
                              <li className="text-xl" key={item.id}>
                                <a
                                  href={item.href ? item.href : `#${item.id}`}
                                  onClick={menuClickHandler}
                                >
                                  {item.text}
                                </a>
                              </li>
                            ))}

                            <li className="flex justify-center">
                              <a
                                aria-label="WhatsApp messenger"
                                className="flex items-center gap-x-4"
                                href="https://wa.me/+6281222651346?text=Hi%20Nirav%20Villa"
                                onClick={handleWhatsAppClick}
                              >
                                <svg
                                  className="w-8 h-8"
                                  role="presentation"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </a>
                            </li>

                            <li className="mt-4">
                              <Button clickHandler={bookNowHandler}>
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
