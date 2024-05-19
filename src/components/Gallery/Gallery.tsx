"use client";

import { Heading } from "../Heading/Heading";
import Image from "next/image";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

interface IMockPost {
  id: string;
  caption: string;
  media_url: string;
  text: string;
}

const mockMedia: IMockPost[] = [
  {
    id: "01",
    caption: "",
    media_url: "/images/gallery/pool.JPG",
    text: "Pool",
  },
  {
    id: "02",
    caption: "",
    media_url: "/images/gallery/lounge.JPG",
    text: "Lounge room",
  },
  {
    id: "03",
    caption: "",
    media_url: "/images/gallery/kitchen.JPG",
    text: "Kitchen",
  },
  {
    id: "04",
    caption: "",
    media_url: "/images/gallery/bedroom.JPG",
    text: "Bedroom",
  },
  {
    id: "04",
    caption: "",
    media_url: "/images/gallery/dining.JPG",
    text: "Dining area",
  },
  {
    id: "05",
    caption: "",
    media_url: "/images/gallery/bathroom.JPG",
    text: "Bathroom",
  },
];

export const Gallery = () => {
  let [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
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
                onClick={handleModal}
              >
                <div className="overflow-hidden mb-4">
                  <Image
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 duration-[350ms] rounded-xl"
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
        Test
      </Modal>
    </>
  );
};
