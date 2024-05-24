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
    <div className="bg-white/5 rounded-xl overflow-hidden">
      <div className="">
        <Image
          className="w-full h-full object-cover aspect-square"
          src={item.media.media_url}
          alt={item.media.caption}
          height="0"
          width="0"
          sizes="20vw"
          priority
        />
      </div>

      <div className="flex flex-col gap-y-4 pt-6 px-8 pb-8">
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
        <div className="grid grid-cols-3 gap-x-6 lg:gap-x-12 w-[175vw] lg:w-auto">
          {services.map((item, index) => (
            <Tile key={index} item={item}></Tile>
          ))}
        </div>
      </MobileOverflow>
    </Layout>
  );
};
