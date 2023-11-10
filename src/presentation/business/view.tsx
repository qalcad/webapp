import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";

const NavButtons = [
  {
    label: "Home",
    variant: "home",
    active: false
  },
  {
    label: "Search",
    variant: "search",
    active: false
  },
  {
    label: "About Us",
    variant: "about",
    active: false
  }
];
export default function View() {
  return (
    <>
      <Topbar navs={NavButtons} variant="secondary" />
      <GalleryPreview />
    </>
  );
}
