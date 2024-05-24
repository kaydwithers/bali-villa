import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Button } from "../Button/Button";
import { Layout } from "../Layout/Layout";
import React from "react";

export const Cta = () => {
  return (
    <Layout classNameOverride="!py-6">
      <div className="flex justify-center">
        <div className="w-80">
          <Button
            href="https://www.airbnb.com.au/rooms/1157674003167983926"
            isExternal
            size="large"
          >
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
