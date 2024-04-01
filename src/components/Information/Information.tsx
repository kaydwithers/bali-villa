"use client";

import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { Layout } from "../Layout/Layout";

interface IInformation {
  id: string;
  heading: string;
  contents: string[];
}

const information: IInformation[] = [
  {
    id: "1",
    heading: "Price",
    contents: ["From $200 per night."],
  },
  {
    id: "2",
    heading: "Things to see",
    contents: ["The beach."],
  },
  {
    id: "3",
    heading: "Amenities",
    contents: ["Coffee machine.", "Pool.", "Television."],
  },
];

export const Information = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="h-full w-full lg:w-[50vw]">
        <Image
          className="w-full h-full object-cover"
          src="/hero.jpeg"
          alt="Bali Villa"
          height="0"
          width="0"
          sizes="50vw"
          priority
        />
      </div>

      <div className="flex flex-1">
        <Layout>
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
                          <h4 className="text-2xl">{item.heading}</h4>

                          {open ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 12h14"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
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
                        <Disclosure.Panel className="text-white/70 pb-8">
                          {item.contents.map((text, index) => (
                            <p key={index}>{text}</p>
                          ))}
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
