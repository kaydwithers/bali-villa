"use client";

import { Heading } from "../Heading/Heading";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";
import { Modal } from "../Modal/Modal";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

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
        caption: "Entrance to the Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/entrance.JPG",
        text: "Entrance",
      },
      {
        id: 1,
        caption: "Luxury pool at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/pool.JPG",
        text: "Pool",
      },
      {
        id: 2,
        caption:
          "Luxury lounge room with Netflix at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/lounge.JPG",
        text: "Lounge room",
      },
      {
        id: 3,
        caption:
          "Luxury kitchen with many amenities at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/kitchen.JPG",
        text: "Kitchen",
      },
      {
        id: 4,
        caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/bedroom.JPG",
        text: "Bedroom",
      },
      {
        id: 5,
        caption: "Luxury dining area at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/dining.JPG",
        text: "Dining area",
      },
      {
        id: 6,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/bathroom-1.JPG",
        text: "Bathroom 1",
      },
      {
        id: 7,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/one-bedroom/bathroom-2.JPG",
        text: "Bathroom 2",
      },
    ],
  },
  {
    name: "2 bedrooms",
    items: [
      {
        id: 0,
        caption: "Luxury pool at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/pool.JPG",
        text: "Pool",
      },
      {
        id: 1,
        caption:
          "Luxury lounge room with Netflix at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/lounge.JPG",
        text: "Lounge room",
      },
      {
        id: 2,
        caption:
          "Luxury kitchen with many amenities at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/kitchen.JPG",
        text: "Kitchen",
      },
      {
        id: 3,
        caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/bedroom-1.JPG",
        text: "Bedroom 1",
      },
      {
        id: 4,
        caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/bedroom-2.JPG",
        text: "Bedroom 2",
      },
      {
        id: 5,
        caption: "Luxury dining area at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/dining.JPG",
        text: "Dining area",
      },
      {
        id: 6,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/bathroom-1.JPG",
        text: "Bathroom 1",
      },
      {
        id: 7,
        caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
        media_url: "/image/gallery/two-bedroom/bathroom-2.JPG",
        text: "Bathroom 2",
      },
    ],
  },
];

const MyTab = ({ children }: ITab) => {
  return (
    <Tab className="font-semibold rounded-full py-5 px-8 lg:py-6 lg:px-12 text-base lg:text-xl text-white focus:outline-none aria-selected:bg-white/10 hover:bg-white/5">
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
          <ul className="flex lg:grid gap-6 lg:gap-12 lg:grid-cols-3 lg:w-full">
            {items.map((item) => (
              <button
                className="aspect-square group w-[65vw] lg:w-auto"
                key={item.id}
                onClick={() => handleModal(item.id)}
              >
                <div className="overflow-hidden rounded-xl mb-4 bg-white/10">
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
          className="w-full h-full object-cover aspect-video"
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
                {tabs.map((item, index) => (
                  <MyTab key={index}>{item.name}</MyTab>
                ))}
              </Tab.List>

              <Tab.Panels className="">
                {tabs.map((item, index) => (
                  <MyTabPanel key={index} items={item.items}></MyTabPanel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </Layout>
    </>
  );
};
