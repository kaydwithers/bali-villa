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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/XgHFaTvzwthxafMB6"
                target="_blank"
              >
                Finn&rsquo;s at Uluwatu
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
                className="inline-flex items-center gap-x-1 text-white"
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
            <li>
              Tee off at{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/kvtAdyqBpMrr2TCc7"
                target="_blank"
              >
                New Kuta Golf
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>Catch a wave with surfing lessons at Dreamland Beach</li>
            <li>
              Get fit at{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/dhzBXsJXWYZ2RAao9"
                target="_blank"
              >
                Bambu Fitness
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>{" "}
              or{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/3GGQ6u3VMTaChFWbA"
                target="_blank"
              >
                CrossFit Uluwatu
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
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
            <li>
              Enjoy a delightful morning at{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/rqTyHygU426N7V1Y7"
                target="_blank"
              >
                Tarabelle
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/8kdvvYHiztfUL68x5"
                target="_blank"
              >
                % Arabica Coffee
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/imD85ntZe2Ms3VD6A"
                target="_blank"
              >
                Fren&rsquo;cha Bakery
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
            <strong className="font-semibold">Lunch</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>
              Savor local flavors at{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/ZoSiWRrqzargcTuh8"
                target="_blank"
              >
                Warung Local
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>{" "}
              or{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/bi4d8Yf9MGny2fUL6"
                target="_blank"
              >
                Waroeng De Dusun
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              Indulge in fresh seafood at the{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/ERSKuhuDSNd3SxxEA"
                target="_blank"
              >
                Jimbaran Fish Market
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
            <strong className="font-semibold">Dinner</strong>
          </h4>
          <ul className="flex flex-col gap-y-2">
            <li>
              Treat yourself to culinary excellence at{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/dTPMq1xdB7d8T2R97"
                target="_blank"
              >
                Cuca
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
            <li>
              Experience the magic of{" "}
              <a
                className="inline-flex items-center gap-x-1 text-white"
                href="https://maps.app.goo.gl/GLPBm25gsKgFJoqdA"
                target="_blank"
              >
                Abracadabra Restaurant
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </li>
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
              Because Bali is a tropical paradise, we&rsquo;ve got you covered
              with mosquito repellents in every room. Feel free to use either
              the electric ones or the lotion to keep those pesky bugs at bay.
            </li>

            <li>
              <strong className="font-semibold">Night Sounds:</strong> You might
              hear the distinctive call of geckos around our area at night. But
              don&rsquo;t worry, they&rsquo;re just outside the villa and
              won&rsquo;t come in.
            </li>

            <li>
              <strong className="font-semibold">Chirping Crickets:</strong>{" "}
              Another common night time sound you&rsquo;ll encounter here is the
              soothing chirping of crickets. It&rsquo;s all part of the tropical
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
          src="/image/information.webp"
          alt="Luxury pool at Nirav Villa in Uluwatu, Bali."
          height="0"
          width="0"
          sizes="(max-width: 600px) 100vw, 50vw"
          objectFit="cover"
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
