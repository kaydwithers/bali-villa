"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { Layout } from "../Layout/Layout";

interface IInformation {
  id: string;
  heading: string;
  contents: React.ReactNode;
}

const information: IInformation[] = [
  {
    id: "1",
    heading: "Price",
    contents: (
      <>
        <p className="max-w-prose">
          2 bedroom villa from Rp 2,800,000 per night.
        </p>
        <p className="max-w-prose">
          1 bedroom villa from Rp 2,500,000 per night.
        </p>
      </>
    ),
  },
  {
    id: "2",
    heading: "Things to see",
    contents: (
      <ul className="flex flex-col gap-y-2">
        <li>
          <a
            className="flex items-center gap-x-1 text-white"
            href=""
            target="_blank"
          >
            Padang Padang beach
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-1 text-white"
            href=""
            target="_blank"
          >
            Suluban Beach (Perfect for surfing)
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-1 text-white"
            href=""
            target="_blank"
          >
            Dreamland Beach
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-1 text-white"
            href=""
            target="_blank"
          >
            Bingin Beach
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: "3",
    heading: "Restaurants and bars",
    contents: (
      <p className="max-w-prose">
        The best seafood can be found at the fish market in Jimbaran
      </p>
    ),
  },
  {
    id: "4",
    heading: "Amenities",
    contents: (
      <ul className="flex flex-col gap-y-2">
        <li>Internet</li>
        <li>Coffee machine</li>
        <li>Pool</li>
        <li>Television with Netflix</li>
      </ul>
    ),
  },
];

export const Information = () => {
  return (
    <div className="flex h-auto lg:h-screen flex-col md:flex-row">
      <div className="h-96 lg:h-full w-full lg:w-[50vw]">
        <Image
          className="w-full h-full object-cover"
          src="/image/information.JPG"
          alt="Luxury pool at Nirav Villa in Uluwatu, Bali."
          height="0"
          width="0"
          sizes="50vw"
          priority
        />
      </div>

      <div className="flex flex-1">
        <Layout id="about">
          <div className="flex flex-col w-full">
            {information.map((item) => (
              <div
                className="flex flex-col border-b border-white/10"
                key={item.id}
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="pt-12 pb-6 text-left">
                        <div className="flex justify-between">
                          <h4 className="lg:text-xl tracking-[0.2em] font-semibold uppercase">
                            {item.heading}
                          </h4>

                          {open ? (
                            <MinusIcon className="w-6 h-6" />
                          ) : (
                            <PlusIcon className="w-6 h-6" />
                          )}
                        </div>
                      </Disclosure.Button>

                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="flex flex-col text-white/70 pb-8 gap-y-2">
                          {item.contents}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
};
