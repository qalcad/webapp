import React from "react";
import Footer from "../../components/footer/view";
import Topbar from "../../components/topbar/view";
import NavButtonsDS from "../../dataSources/navButtons";
import SearchBar from "../../components/searchBar/view";

export default function View() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar navs={NavButtonsDS} variant="primary" />
      <SearchBar />
      <div className="grow" />
      <Footer />
    </div>
  );
}
