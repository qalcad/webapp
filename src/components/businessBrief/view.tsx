import React from "react";
import BusinessInfoDto from "../../models/businessInfoDto";
import Image from "next/image";
import VerifiedSVG from "../../../public/images/verified.svg";
import ShareButton from "../shareButton/view";

export interface Props {
  info: BusinessInfoDto;
}

export default function BusinessBrief({ info }: Props) {
  return (
    <div className="w-full p-8 md:items-start items-center flex font-kanit gap-2.5 flex-col md:flex-row">
      <div className="grow shrink basis-0 flex-col justify-center items-center md:items-start flex gap-2.5">
        <div className="justify-start items-center md:items-baseline gap-x-2.5 flex flex-col md:flex-row flex-wrap">
          <div className="justify-start items-center md:item gap-x-2.5 flex flex-col md:flex-row">
            <div className="w-6 h-6 relative">
              <Image src={VerifiedSVG} alt="verified" />
            </div>
            <div className="text-black text-[32px] font-medium leading-snug">
              {info.name}
            </div>
          </div>
          {info.slogan && (
            <div className="text-gray-700 text-base font-normal leading-snug">
              {info.slogan}
            </div>
          )}
        </div>
        <div className="justify-start items-start gap-2.5 flex">
          <div className="text-gray-700 text-base font-normal leading-snug">
            {info.businessType}
          </div>
          <div className="text-gray-700 text-base font-normal leading-snug">
            •
          </div>
          <div className="text-gray-700 text-base font-normal leading-snug">
            {info.formattedAddress}
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-start gap-2.5 flex">
        <ShareButton />
      </div>
    </div>
  );
}
