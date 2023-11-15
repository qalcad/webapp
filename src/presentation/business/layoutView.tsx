import React from "react";
import Topbar from "../../components/topbar/view";
import GalleryPreview from "../../components/galleryPreview/view";
import BusinessTabs from "../../components/businessTabs/view";
import Footer from "../../components/footer/view";
import NavButtonsDS from "../../dataSources/navButtons";
import BusinessTabButtonsDS from "../../dataSources/businessTabButtons";
import BusinessDto from "../../models/businessDto";
import BusinessBrief from "../../components/businessBrief/view";

export interface Props {
  data: BusinessDto;
  businessSlug: string;
  children: React.ReactNode;
}

export default function View({ data, businessSlug, children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar navs={NavButtonsDS} variant="secondary" />
      <GalleryPreview media={data.media} />
      <BusinessBrief info={data.info} />
      <BusinessTabs tabs={BusinessTabButtonsDS} businessSlug={businessSlug} />
      {children}
      <Footer />
    </div>
  );
}
