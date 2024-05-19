"use client";

import { Heading } from "../Heading/Heading";
import Image from "next/image";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

interface IMockPost {
  id: number;
  caption: string;
  media_url: string;
  text: string;
}

const mockMedia: IMockPost[] = [
  {
    id: 0,
    caption: "Luxury pool at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/pool.JPG",
    text: "Pool",
  },
  {
    id: 1,
    caption: "Luxury lounge room with Netflix at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/lounge.JPG",
    text: "Lounge room",
  },
  {
    id: 2,
    caption:
      "Luxury kitchen with many amenities at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/kitchen.JPG",
    text: "Kitchen",
  },
  {
    id: 3,
    caption: "Luxury comfortable bedroom at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/bedroom.JPG",
    text: "Bedroom",
  },
  {
    id: 4,
    caption: "Luxury dining area at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/dining.JPG",
    text: "Dining area",
  },
  {
    id: 5,
    caption: "Luxury bathroom at Nirav Villa in Uluwatu, Bali.",
    media_url: "/images/gallery/bathroom.JPG",
    text: "Bathroom",
  },
];

export const Gallery = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [activeMedia, setActiveMedia] = useState(mockMedia[0]);

  const handleModal = (id: number) => {
    setActiveMedia(mockMedia[id]);
    setIsModalOpen(true);
  };

  return (
    <>
      <Layout id="gallery">
        <div className="sr-only">
          <Heading>Gallery</Heading>
        </div>

        <MobileOverflow>
          <ul className="grid gap-6 lg:gap-12 grid-cols-6 lg:grid-cols-3 w-[345vw] lg:w-auto">
            {mockMedia.map((item) => (
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

                <div className="text-center">
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </ul>
        </MobileOverflow>
      </Layout>

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
