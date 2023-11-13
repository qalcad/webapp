import React from "react";
import HomeView from "../../../src/presentation/business/homeView";
import { notFound } from "next/navigation";
import centralHotelDS from "../../../src/dataSources/centralHotel";

async function getData(businessSlug: string) {
  if (businessSlug != "central-hotel") {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }
  return centralHotelDS;
}

export default async function Page({ params: { businessSlug } }) {
  const data = await getData(businessSlug);
  return <HomeView data={data} />;
}
