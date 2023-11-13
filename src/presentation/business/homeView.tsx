import React from "react";
import BusinessDto from "../../models/businessDto";

export interface Props {
  data: BusinessDto;
}

export default function View({ data }: Props) {
  return (
    <div className="w-full justify-center items-center flex p-8">home</div>
  );
}
