import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";
import BusinessInfo from "../../components/businessInfo/view";
import BusinessTabs from "../../components/businessTabs/view";
import Footer from "../../components/footer/view";
import BusinessContents from "../../components/businessContents/view";
import Data from "../../dataSources/centralHotel";

const NavButtons = [
  { label: "Home", variant: "home", url: "/" },
  { label: "Search", variant: "search", url: "/search" },
  { label: "About Us", variant: "about", url: "/about-us" }
];

const TabButtons = [
  { label: "Home", variant: "home", active: true, disabled: false },
  { label: "Gallery", variant: "gallery", active: false, disabled: false },
  { label: "Location", variant: "location", active: false, disabled: false },
  { label: "News", variant: "news", active: false, disabled: true },
  { label: "Inquiry", variant: "inquiry", active: false, disabled: true }
];

export default function View() {
  return (
    <>
      <Topbar navs={NavButtons} variant="secondary" />
      <GalleryPreview media={Data.gallery} />
      <BusinessInfo info={Data.businessInfo} />
      <BusinessTabs tabs={TabButtons} />
      <BusinessContents />
      <Footer />
    </>
  );
}