import React from "react";
import MapManager from "../../components/mapManager/view";
import BusinessDto from "../../models/businessDto";

export interface Props {
  data: BusinessDto;
  googleAPIKey: string;
}

export default function View({ data, googleAPIKey }: Props) {
  return (
    <MapManager
      coords={data.address.coords}
      label={data.info.name || ""}
      googleAPIKey={googleAPIKey}
    />
  );
}
