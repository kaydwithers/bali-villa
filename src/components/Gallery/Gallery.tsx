"use client";

import { Heading } from "../Heading/Heading";
import Image from "next/image";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";
import { Modal } from "../Modal/Modal";
import { Tab } from "@headlessui/react";
import { useState } from "react";

interface ITabsItem {
  id: number;
  caption: string;
  media_url: string;
  text: string;
}

interface ITabs {
  name?: string;
  items: Array<ITabsItem>;
}

interface ITab {
  children: React.ReactNode;
}

const tabs: Array<ITabs> = [
  {
    name: "1 bedroom",
    items: [
      {
        id: 0,
        caption: "Luxury pool at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/pool.JPG",
        text: "Pool",
      },
      {
        id: 1,
        caption:
          "Luxury lounge room with Netflix at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/lounge.JPG",
        text: "Lounge room",
      },
      {
        id: 2,
        caption:
          "Luxury kitchen with many amenities at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/kitchen.JPG",
        text: "Kitchen",
      },
      {
        id: 3,
        caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/bedroom.JPG",
        text: "Bedroom",
      },
      {
        id: 4,
        caption: "Luxury dining area at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/dining.JPG",
        text: "Dining area",
      },
      {
        id: 5,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/one-bedroom/bathroom.JPG",
        text: "Bathroom",
      },
    ],
  },
  {
    name: "2 bedrooms",
    items: [
      {
        id: 0,
        caption: "Luxury pool at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/pool.JPG",
        text: "Pool",
      },
      {
        id: 1,
        caption:
          "Luxury lounge room with Netflix at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/lounge.JPG",
        text: "Lounge room",
      },
      {
        id: 2,
        caption:
          "Luxury kitchen with many amenities at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/kitchen.JPG",
        text: "Kitchen",
      },
      {
        id: 3,
        caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/bedroom.JPG",
        text: "Bedroom",
      },
      {
        id: 4,
        caption: "Luxury dining area at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/dining.JPG",
        text: "Dining area",
      },
      {
        id: 5,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/images/gallery/two-bedroom/bathroom.JPG",
        text: "Bathroom",
      },
    ],
  },
];

const MyTab = ({ children }: ITab) => {
  return (
    <Tab className="rounded-full py-4 px-8 text-base lg:text-xl text-white focus:outline-none aria-selected:bg-white/10 hover:bg-white/5">
      {children}
    </Tab>
  );
};

const MyTabPanel = ({ items }: ITabs) => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [activeMedia, setActiveMedia] = useState(items[0]);

  const handleModal = (id: number) => {
    setActiveMedia(items[id]);
    setIsModalOpen(true);
  };

  return (
    <>
      <Tab.Panel className="">
        <MobileOverflow>
          <ul className="grid gap-6 lg:gap-12 grid-cols-6 lg:grid-cols-3 w-[345vw] lg:w-auto">
            {items.map((item) => (
              <button
                className="aspect-square group"
                key={item.id}
                onClick={() => handleModal(item.id)}
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 duration-[350ms]"
                    src={item.media_url}
                    alt={item.caption}
                    height="0"
                    width="0"
                    sizes="30vw"
                    priority
                  />
                </div>

                <div className="text-center mb-4 lg:mb-0">
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </ul>
        </MobileOverflow>
      </Tab.Panel>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Image
          className="w-full h-full object-cover aspect-auto"
          src={activeMedia.media_url}
          alt={activeMedia.caption}
          height="0"
          width="0"
          sizes="100vw"
          priority
        />
      </Modal>
    </>
  );
};

export const Gallery = () => {
  return (
    <>
      <Layout id="gallery">
        <div className="sr-only">
          <Heading>Gallery</Heading>
        </div>

        <div className="flex w-full justify-center">
          <div className="w-full">
            <Tab.Group>
              <Tab.List className="flex justify-center gap-x-4 mb-8">
                <MyTab>{tabs[0].name}</MyTab>
                <MyTab>{tabs[1].name}</MyTab>
              </Tab.List>

              <Tab.Panels className="">
                <MyTabPanel items={tabs[0].items}></MyTabPanel>
                <MyTabPanel items={tabs[1].items}></MyTabPanel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </Layout>
    </>
  );
};
