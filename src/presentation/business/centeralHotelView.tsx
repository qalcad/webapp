import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";
import BusinessInfo from "../../components/businessInfo/view";
import BusinessTabs from "../../components/businessTabs/view";
import Footer from "../../components/footer/view";
import BusinessContents from "../../components/businessContents/view";

const NavButtons = [
  { label: "Home", variant: "home", active: false },
  { label: "Search", variant: "search", active: false },
  { label: "About Us", variant: "about", active: false }
];

const TabButtons = [
  { label: "Home", variant: "home", active: true, disabled: false },
  { label: "Gallery", variant: "gallery", active: false, disabled: false },
  { label: "Location", variant: "location", active: false, disabled: false },
  { label: "News", variant: "news", active: false, disabled: true },
  { label: "Inquiry", variant: "inquiry", active: false, disabled: true }
];

const GallerySrcs = [
  "/uploads/central-hotel/001.jpeg",
  "/uploads/central-hotel/002.jpeg",
  "/uploads/central-hotel/003.jpeg",
  "/uploads/central-hotel/004.jpeg",
  "/uploads/central-hotel/005.jpeg",
  "/uploads/central-hotel/006.jpeg",
  "/uploads/central-hotel/007.jpeg",
  "/uploads/central-hotel/008.jpeg"
];

export default function View() {
  return (
    <>
      <Topbar navs={NavButtons} variant="secondary" />
      <GalleryPreview imageSrcs={GallerySrcs} />
      <BusinessInfo />
      <BusinessTabs tabs={TabButtons} />
      <BusinessContents />
      <Footer />
    </>
  );
}
