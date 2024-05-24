"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { Disclosure, Transition } from "@headlessui/react";
import { Layout } from "../Layout/Layout";

interface IInformation {
  id: number;
  heading: string;
  contents: React.ReactNode;
}

const information: IInformation[] = [
  {
    id: 1,
    heading: "Price",
    contents: (
      <>
        <p className="max-w-prose">
          2 bedroom villa from Rp 2,800,000 per night.
        </p>
        <p className="max-w-prose">
          1 bedroom villa from Rp 2,500,000 per night.
        </p>
      </>
    ),
  },
  {
    id: 2,
    heading: "Things to do",
    contents: (
      <div className="flex flex-col gap-y-8">
        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Beaches</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/CeJkYqy1KEqWFUaL7"
                target="_blank"
              >
                Padang Padang beach
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/tquPTd9yyxFd3SvRA"
                target="_blank"
              >
                Suluban Beach (Perfect for surfing)
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/saDrzaQsjiurfYtd7"
                target="_blank"
              >
                Dreamland Beach
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/VRMafzV855gaEyXK8"
                target="_blank"
              >
                Bingin Beach
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Sunset Spots</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/XgHFaTvzwthxafMB6"
                target="_blank"
              >
                Finn's at Uluwatu
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/hkGmwQ2pedumMTwx7"
                target="_blank"
              >
                The Kopi Cart
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/KaZCHpcrfTEwev6x7"
                target="_blank"
              >
                Jimbaran
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/g5dnVuwSLKnFNb5y6"
                target="_blank"
              >
                Blue Point
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/2XjDXdRyoXomFUJS7"
                target="_blank"
              >
                El Kabron
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Sports</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>Tee off at New Kuta Golf</li>
            <li>Catch a wave with surfing lessons at Dreamland Beach</li>
            <li>Get fit at Bambu Fitness or CrossFit Uluwatu</li>
          </ul>
        </div>

        <div>
          <p>Enjoy your stay and all the wonders Bali has to offer!</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    heading: "Eateries",
    contents: (
      <div className="flex flex-col gap-y-8">
        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Breakfast</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>Enjoy a delightful morning at Tarabelle</li>
            <li>% Coffee</li>
            <li>Frencha Cafe.</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Lunch</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>Savor local flavors at Warung Local or Warung De Dusun</li>
            <li>Indulge in fresh seafood at the Jimbaran Fish Market</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-2">
            <strong className="font-semibold">Dinner</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>Treat yourself to culinary excellence at Cuca</li>
            <li>Feast on seafood at Jimbaran Seafood Restaurant</li>
            <li>Experience the magic of Abracadabra Restaurant</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    heading: "Amenities",
    contents: (
      <ul className="flex flex-col gap-y-2">
        <li>Internet</li>
        <li>Coffee machine</li>
        <li>Pool</li>
        <li>Television with Netflix</li>
      </ul>
    ),
  },
  {
    id: 5,
    heading: "Tips from host",
    contents: (
      <div className="flex flex-col gap-y-8">
        <div>
          <ul className="flex flex-col gap-y-6">
            <li>
              Uluwatu gets busy from noon until sunset. Avoid the Uluwatu main
              road if you are driving towards Kuta. An alternative route is to
              use your GPS through Nusa Dua and take the toll road. Or you can
              save time by using a scooter.
            </li>
            <li>The TV comes with Netflix.</li>

            <li>
              <strong className="font-semibold">Mosquito Protection:</strong>{" "}
              Because Bali is a tropical paradise, we've got you covered with
              mosquito repellents in every room. Feel free to use either the
              electric ones or the lotion to keep those pesky bugs at bay.
            </li>

            <li>
              <strong className="font-semibold">Night Sounds:</strong> You might
              hear the distinctive call of geckos around our area at night. But
              don't worry, they're just outside the villa and won't come in.
            </li>

            <li>
              <strong className="font-semibold">Chirping Crickets:</strong>{" "}
              Another common night time sound you'll encounter here is the
              soothing chirping of crickets. It's all part of the tropical
              symphony!
            </li>

            <li>
              Remember, your comfort is our priority. If you need anything at
              all, just reach out to your friendly host.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

export const Information = () => {
  return (
    <div className="flex h-auto lg:min-h-screen flex-col md:flex-row">
      <div className="h-96 lg:h-screen w-full lg:w-[50vw]">
        <Image
          className="w-full h-full object-cover"
          src="/image/information.JPG"
          alt="Luxury pool at Nirav Villa in Uluwatu, Bali."
          height="0"
          width="0"
          sizes="50vw"
          priority
        />
      </div>

      <div className="flex flex-1">
        <Layout id="about" classNameOverride="!pt-0 lg:!pt-12">
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
                          <h4 className="lg:text-xl tracking-[0.2em] font-semibold uppercase">
                            {item.heading}
                          </h4>

                          {open ? (
                            <MinusIcon className="w-6 h-6" />
                          ) : (
                            <PlusIcon className="w-6 h-6" />
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
                        <Disclosure.Panel className="flex flex-col text-white/70 pb-8 gap-y-2">
                          {item.contents}
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
