import React from "react";
import { notFound } from "next/navigation";
import LocationView from "../../../../src/presentation/business/locationView";
import centralHotelDS from "../../../../src/dataSources/centralHotel";

export async function generateStaticParams() {
  return [centralHotelDS].map((business) => ({
    businessSlug: business.slug
  }));
}

async function getData(businessSlug: string) {
  if (businessSlug != "central-hotel") {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }
  return centralHotelDS;
}

export default async function Page({ params: { businessSlug } }) {
  const data = await getData(businessSlug);
  return <LocationView data={data} googleAPIKey={process.env.googleAPIKey} />;
}
