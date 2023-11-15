import React from "react";
import LayoutView from "../../../src/presentation/business/layoutView";
import centralHotelDS from "../../../src/dataSources/centralHotel";
import { notFound } from "next/navigation";

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

export default async function Layout({
  params: { businessSlug },
  children
}: {
  children: React.ReactNode;
  params: { businessSlug: string };
}) {
  const data = await getData(businessSlug);
  return (
    <LayoutView data={centralHotelDS} businessSlug={businessSlug}>
      {children}
    </LayoutView>
  );
}
