"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Button } from "../Button/Button";
import { Layout } from "../Layout/Layout";
import React from "react";

export const Cta = () => {
  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  const clickHandler = () => {
    event({
      action: "book_now_cta",
      category: "ecommerce",
      label: "Book now CTA clicked",
    });

    window.open(
      "https://www.airbnb.com.au/rooms/1157674003167983926",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <Layout>
      <div className="motion-safe:animate-bounce flex justify-center">
        <div className="w-80">
          <Button isExternal size="large" clickHandler={clickHandler}>
            Book now
            <ArrowUpRightIcon
              className="inline-block h-4 w-4"
              title="Opens in new tab"
            />
          </Button>
        </div>
      </div>
    </Layout>
  );
};
