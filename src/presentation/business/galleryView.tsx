import React from "react";
import BusinessDto from "../../models/businessDto";
import GalleryList from "../../components/galleryList/view";

export interface Props {
  data: BusinessDto;
}

export default function View({ data }: Props) {
  return <GalleryList media={data.media || []} />;
}
