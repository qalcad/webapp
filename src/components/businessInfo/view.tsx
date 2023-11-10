import React from "react";
import Image from "next/image";
import VerifiedSVG from "../../../public/images/verified.svg";
import ShareButton from "../shareButton/view";
import SimpleClickableInfo from "../simpleClickableInfo/view";

export interface Props {}

export default function BusinessInfo({}: Props) {
  return (
    <div className="w-full p-8 flex-col justify-center items-start flex font-kanit">
      <div className="self-stretch justify-start items-center gap-2.5 flex md:flex-row flex-col mb-2.5">
        <div className="justify-start items-center md:items-baseline gap-2.5 flex md:flex-row flex-col">
          <div className="flex items-baseline gap-2.5">
            <div className="p-[5px] justify-center items-center flex">
              <div className="w-6 h-6 relative">
                <Image src={VerifiedSVG} alt="verified" />
              </div>
            </div>
            <h1 className="text-black text-[32px] font-medium">
              Central Hotel
            </h1>
          </div>
          <div className="text-gray-700 text-lg font-normal">Best in town</div>
        </div>
        <div className="grow md:block hidden"></div>
        <ShareButton />
      </div>
      {/*  */}
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex">
        <div className="text-gray-700 text-base font-normal leading-snug">
          Hotel
        </div>
      </div>
      {/*  */}
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
        <SimpleClickableInfo
          buttonLabel="Copy"
          items={["+252770768492", "+252770768492"]}
        />
      </div>
      {/*  */}
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
        <SimpleClickableInfo
          buttonLabel="Map"
          items={["Suuq bacad, Mogadishu"]}
        />
      </div>
      {/*  */}
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
        Restaurant, Coffee, Wedding hall
      </div>
      {/*  */}
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
        <div className="self-stretch text-gray-700 text-base font-normal leading-snug">
          Are you looking for a juicy burger? Instead of patties made using
          ground meat as in existing handmade burgers, we use 140g |of beef cut
          daily to provide freshness, and we pursue novelty in burgers with a
          special gravy sauce.{" "}
        </div>
      </div>
    </div>
  );
}
