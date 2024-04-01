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
  // { id: "01", caption: "", media_url: "/instagram/bali-villa-01.jpg", text: "" },
  // { id: "02", caption: "", media_url: "/instagram/bali-villa-02.jpg", text: "" },
  // { id: "03", caption: "", media_url: "/instagram/bali-villa-03.jpg", text: "" },
  // { id: "04", caption: "", media_url: "/instagram/bali-villa-04.jpg", text: "" },
  {
    id: "05",
    caption: "",
    media_url: "/instagram/bali-villa-05.jpg",
    text: "Stunning view",
  },
  {
    id: "06",
    caption: "",
    media_url: "/instagram/bali-villa-06.jpg",
    text: "Pool",
  },
  {
    id: "07",
    caption: "",
    media_url: "/instagram/bali-villa-07.jpg",
    text: "Air conditioner",
  },
  // { id: "08", caption: "", media_url: "/instagram/bali-villa-08.jpg", text: "" },
  {
    id: "09",
    caption: "",
    media_url: "/instagram/bali-villa-09.jpg",
    text: "Kitchen",
  },
  {
    id: "10",
    caption: "",
    media_url: "/instagram/bali-villa-10.jpg",
    text: "Bar",
  },
  {
    id: "11",
    caption: "",
    media_url: "/instagram/bali-villa-11.jpg",
    text: "Comfortable bedrooms",
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
        <Heading>Gallery</Heading>

        <MobileOverflow>
          <ul className="grid gap-6 lg:gap-12 grid-cols-6 lg:grid-cols-3 w-[345vw] lg:w-auto">
            {mockMedia.map((item) => (
              <button
                className="aspect-square"
                key={item.id}
                onClick={handleModal}
              >
                <Image
                  className="w-full h-full object-cover aspect-square mb-4"
                  src={item.media_url}
                  alt={item.caption}
                  height="0"
                  width="0"
                  sizes="30vw"
                  priority
                />

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
