import React from "react";
import LayoutView from "../../../src/presentation/business/layoutView";
import BusinessDto from "../../../src/models/businessDto";
import centralHotelDS from "../../../src/dataSources/centralHotel";
import { notFound } from "next/navigation";

async function getData(businessSlug: string) {
  console.log(businessSlug);
  if (businessSlug != "central-hotel") {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }
  return centralHotelDS;
}

export default async function Layout({
  params: { businessSlug },
  children
}: {
  children: React.ReactNode;
  params: { businessSlug: string };
}) {
  const data = await getData(businessSlug);
  return <LayoutView data={centralHotelDS}>{children}</LayoutView>;
}
