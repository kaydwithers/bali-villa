import { Button } from "../Button/Button";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <Image
          className="w-full h-[50vh] object-cover"
          src="/hero.jpeg"
          alt="Bali Villa"
          height="0"
          width="0"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-black/0"></div>

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
  );
};
