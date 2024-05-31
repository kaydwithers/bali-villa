"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const initMap = async () => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    });

    const { Map } = await loader.importLibrary("maps");

    const { AdvancedMarkerElement } = (await loader.importLibrary(
      "marker",
    )) as google.maps.MarkerLibrary;

    const position = {
      lat: -8.8290831,
      lng: 115.140647,
    };

    const mapOptions: google.maps.MapOptions = {
      center: position,
      zoom: 14,
      mapId: "BALI_VILLA_MAP_ID",
    };

    const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

    const marker = new AdvancedMarkerElement({
      map,
      position,
    });
  };

  useEffect(() => {
    initMap();
  }, []);

  return <div className="w-full h-[65vh]" ref={mapRef} id="map"></div>;
};
