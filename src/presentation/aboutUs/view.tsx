import React from "react";
import Topbar from "../../components/topbar/view";
import Footer from "../../components/footer/view";
import AboutUsContents from "../../components/aboutUsContents/view";
import ContactUs from "../../components/contactUs/view";

const NavButtons = [
  { label: "Home", variant: "home", active: false },
  { label: "Search", variant: "search", active: false },
  { label: "About Us", variant: "about", active: false }
];

export default function View() {
  return (
    <>
      <Topbar navs={NavButtons} variant="secondary" />
      <AboutUsContents />
      <ContactUs />
      <Footer />
    </>
  );
}
