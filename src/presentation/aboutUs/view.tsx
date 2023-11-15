import React from "react";
import Topbar from "../../components/topbar/view";
import Footer from "../../components/footer/view";
import AboutUsContents from "../../components/aboutUsContents/view";
import ContactUs from "../../components/contactUs/view";
import NavButtonsDS from "../../dataSources/navButtons";

export default function View() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar navs={NavButtonsDS} variant="secondary" />
      <AboutUsContents />
      {/* {<ContactUs />} */}
      <Footer />
    </div>
  );
}
