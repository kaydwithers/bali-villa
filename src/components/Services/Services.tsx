import { Button } from "../Button/Button";
import { Heading } from "../Heading/Heading";
import { Layout } from "../Layout/Layout";
import { MobileOverflow } from "../MobileOverflow/MobileOverflow";
import Image from "next/image";
import React from "react";

interface IItem {
  title: string;
  text: string;
  media: {
    media_url: string;
    caption: string;
  };
}

interface ITile {
  item: IItem;
}

const services: Array<IItem> = [
  {
    title: "Airport Pick up",
    text: "3 hours for Rp 200,000",
    media: {
      media_url: "/image/services/airport-pick-up.JPG",
      caption: "",
    },
  },
  {
    title: "Charter Car",
    text: "10 hours for Rp 750,000",
    media: {
      media_url: "/image/services/charter-car.JPG",
      caption: "",
    },
  },
  {
    title: "Airport Drop Off",
    text: "3 hours for Rp 200,000",
    media: {
      media_url: "/image/services/airport-drop-off.JPG",
      caption: "",
    },
  },
];

const Tile = ({ item }: ITile) => {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden w-[65vw] lg:w-auto mb-4 lg:mb-0">
      <div className="">
        <Image
          className="w-full h-full object-cover aspect-square"
          src={item.media.media_url}
          alt={item.media.caption}
          height="480"
          width="480"
          sizes="(max-width: 600px) 280px, 480px"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-y-4 pt-6 px-8 pb-8 lg:pt-8 lg:px-10 lg:pb-10 text-center">
        <h4 className="text-xl font-semibold">{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <Layout id="services">
      <Heading>Services</Heading>

      <MobileOverflow>
        <div className="flex lg:grid lg:grid-cols-3 gap-x-6 lg:gap-x-12 lg:w-full">
          {services.map((item, index) => (
            <Tile key={index} item={item}></Tile>
          ))}
        </div>
      </MobileOverflow>
    </Layout>
  );
};
