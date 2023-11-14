import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";
import BusinessTabs from "../../components/businessTabs/view";
import Footer from "../../components/footer/view";
import NavButtonsDS from "../../dataSources/navButtons";
import BusinessTabButtonsDS from "../../dataSources/businessTabButtons";
import BusinessDto from "../../models/businessDto";
import BusinessBrief from "../../components/businessBrief/view";

export default function View({
  data,
  children
}: {
  data: BusinessDto;
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar navs={NavButtonsDS} variant="secondary" />
      <GalleryPreview media={data.media} />
      <BusinessBrief info={data.info} />
      <BusinessTabs tabs={BusinessTabButtonsDS} />
      {children}
      <Footer />
    </>
  );
}
