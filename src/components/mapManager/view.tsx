"use client";

import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import googleServices from "../../dataSources/googleServices";

export interface Props {
  coords: { lat: number; lng: number };
  label: string;
}
export default function MapManager({ coords, label }: Props) {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const loader = new Loader({
      apiKey: googleServices.mapsAPIKey,
      version: "weekly"
    });
    loader.load().then(async () => {
      const google = window.google;
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapLibrary;
      const { AdvancedMarkerElement, PinElement } =
        (await google.maps.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;
      const map = new Map(mapRef.current, {
        mapId: "business",
        center: coords,
        zoom: 16
      });
      const pinScaled = new PinElement({ scale: 1.5 });
      const markerViewScaled = new AdvancedMarkerElement({
        map: map,
        position: coords,
        title: label,
        content: pinScaled.element
      });
    });
  }, []);

  return (
    <div className="flex w-full min-h-[190px] md:min-h-[380px] bg-stone-200">
      <div className="w-full" ref={mapRef} />
    </div>
  );
}