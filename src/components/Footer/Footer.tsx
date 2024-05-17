"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Layout } from "../Layout/Layout";
import { menuItems } from "../Header/Header";

export const Footer = () => {
  return (
    <footer>
      <Layout>
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row gap-x-12 gap-y-6">
            {menuItems.map((item) => (
              <p className="" key={item.id}>
                <a href={item.href}>{item.text}</a>
              </p>
            ))}
          </div>

          <div className="">
            <p>
              <a
                className=""
                href="https://maps.app.goo.gl/hNvptmtVh8ZmPg3w6"
                target="_blank"
              >
                Jl. Villa Airis. <br />
                GG Bunga Mekar No.3, <br />
                Unggasan — Pecatu, Uluwatu{" "}
                <ArrowUpRightIcon
                  className="inline-block h-4 w-4"
                  title="Opens in new tab"
                />
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </footer>
  );
};
