import { Button } from "../Button/Button";
import { Layout } from "../Layout/Layout";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="w-full">
        <div className="relative">
          <div className="block lg:hidden">
            <video
              autoPlay
              loop
              muted
              className="w-full h-[90vh] object-cover bg-white/10"
              poster="/image/hero-mobile.webp"
            >
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="hidden lg:block h-[65vh]">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-white/10"></div>

              <Image
                className="absolute inset-0 w-full h-full object-cover bg-white/10"
                src="/image/hero.webp"
                alt="Luxury lounge room with Netflix and pool at Nirav Villa in Uluwatu, Bali."
                height="0"
                width="0"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/0"></div>
            </div>
          </div>

          {/* <div className="container mx-auto hidden lg:block absolute left-0 right-0 bottom-12 px-12 lg:px-64 w-full">
          <div className="p-6 rounded-full drop-shadow-xl bg-gray-100">
            <div className="flex justify-between items-center text-black px-6">
              <div className="">
                <p>Check in</p>
              </div>

              <div className="">
                <p>Check out</p>
              </div>

              <Button>Make booking</Button>
            </div>
          </div>
        </div> */}
        </div>
      </div>

      <Layout classNameOverride="!pt-8 lg:!pt-16 !pb-0">
        <div className="flex justify-center">
          <div className="max-w-full lg:max-w-5xl">
            <h2 className="text-center text-base/7 lg:text-2xl/10 text-pretty">
              Relax and unwind at Nirav Bali Uluwatu, where &lsquo;Nirav&rsquo;
              embodies calmness and peace. Set in the tranquil Pecatu Uluwatu,
              our cozy Villa invites you to feel at home, miles away. Experience
              leisure and comfort as Bali embraces you with its warmth and
              charm.
            </h2>
          </div>
        </div>
      </Layout>
    </>
  );
};
