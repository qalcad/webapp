import React from "react";
import BusinessDto from "../../models/businessDto";
import BusinessInfo from "../../components/businessInfo/view";

export interface Props {
  data: BusinessDto;
}

export default function View({ data }: Props) {
  return <BusinessInfo info={data.info} />;
}
