"use client";
import React from "react";
import BusinessInfoDto from "../../models/businessInfoDto";
import SimpleClickableInfo from "../simpleClickableInfo/view";
import Image from "next/image";
import PhoneSVG from "../../../public/images/phone.svg";
import ShoppingSVG from "../../../public/images/shopping.svg";
import InfoSVG from "../../../public/images/info.svg";
import MapPinSVG from "../../../public/images/map_pin.svg";
import { useRouter, usePathname } from "next/navigation";

export interface Props {
  info: BusinessInfoDto;
}

export default function BusinessInfo({ info }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onMapClick = React.useCallback(async () => {
    const match = pathname.match(/\/b\/([^\/\s]+)/) || "/b/test";
    router.push(`${match[0]}/location`);
  }, [router, pathname]);

  return (
    <div className="w-full px-8 py-2.5 flex-col justify-center items-start flex font-kanit">
      {info.formattedPhoneNumbers && (
        <div className="py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <div className="w-6 h-6 relative">
            <Image src={PhoneSVG} alt="phone" />
          </div>

          <SimpleClickableInfo
            buttonLabel="Copy"
            onClick={(_, item) => navigator.clipboard.writeText(item)}
            items={info.formattedPhoneNumbers}
          />
        </div>
      )}
      {info.formattedAddress && (
        <div className="py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <div className="w-6 h-6 relative">
            <Image src={MapPinSVG} alt="phone" />
          </div>
          <SimpleClickableInfo
            buttonLabel="Map"
            onClick={onMapClick}
            items={[info.formattedAddress]}
          />
        </div>
      )}

      {info.keywords && (
        <div className="py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <div className="w-6 h-6 relative">
            <Image src={ShoppingSVG} alt="phone" />
          </div>
          <div className="grow shrink basis-0 text-gray-700 text-base font-normal leading-snug">
            {info.keywords.join(", ")}
          </div>
        </div>
      )}
      {info.description && (
        <div className="py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <div className="w-6 h-6 relative">
            <Image src={InfoSVG} alt="phone" />
          </div>
          <div className="grow shrink basis-0 text-gray-700 text-base font-normal leading-snug">
            {info.description}
          </div>
        </div>
      )}
      {info.home && (
        <div className="w-full justify-center items-center flex py-8 text-gray-300 font-light">
          {"placeholder"}
        </div>
      )}
    </div>
  );
}
