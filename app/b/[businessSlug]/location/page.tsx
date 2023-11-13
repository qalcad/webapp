import React from "react";
import { notFound } from "next/navigation";
import LocationView from "../../../../src/presentation/business/locationView";
import centralHotelDS from "../../../../src/dataSources/centralHotel";

async function getData(businessSlug: string) {
  console.log(businessSlug);
  if (businessSlug != "central-hotel") {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }
  return centralHotelDS;
}

export default async function Page({ params: { businessSlug } }) {
  const data = await getData(businessSlug);
  return <LocationView data={data} />;
}
