import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";
import BusinessInfo from "../../components/businessInfo/view";
import BusinessTabs from "../../components/businessTabs/view";
import Footer from "../../components/footer/view";
import BusinessContents from "../../components/businessContents/view";
import NavButtonsDS from "../../dataSources/navButtons";

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
      <Topbar navs={NavButtonsDS} variant="secondary" />
      <GalleryPreview media={[]} />
      <BusinessInfo info={{}} />
      <BusinessTabs tabs={TabButtons} />
      <BusinessContents />
      <Footer />
    </>
  );
}
