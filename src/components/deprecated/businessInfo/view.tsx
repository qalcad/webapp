"use client";
import React from "react";
import Image from "next/image";
import VerifiedSVG from "../../../public/images/verified.svg";
import ShareButton from "../../shareButton/view";
import SimpleClickableInfo from "../../simpleClickableInfo/view";
import { useRouter, usePathname } from "next/navigation";
import BusinessInfoDto from "../../../models/businessInfoDto";

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
    <div className="w-full p-8 flex-col justify-center items-start flex font-kanit">
      <div className="self-stretch justify-start items-center gap-2.5 flex md:flex-row flex-col mb-2.5">
        <div className="justify-start items-center md:items-baseline gap-2.5 flex flex-wrap md:flex-row flex-col">
          <div className="flex flex-wrap items-baseline gap-2.5">
            {info.verified && (
              <div className="p-[5px] justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <Image src={VerifiedSVG} alt="verified" />
                </div>
              </div>
            )}
            <h1 className="text-black text-[32px] font-medium">
              {info.name || ""}
            </h1>
          </div>
          {info.slogan && (
            <div className="text-gray-700 text-lg font-normal">
              {info.slogan}
            </div>
          )}
        </div>
        <div className="grow md:block hidden"></div>
        <ShareButton />
      </div>
      <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex">
        <div className="text-gray-700 text-base font-normal leading-snug">
          {info.businessType || ""}
        </div>
      </div>
      {info.formattedPhoneNumbers && (
        <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <SimpleClickableInfo
            buttonLabel="Copy"
            onClick={(_, item) => navigator.clipboard.writeText(item)}
            items={info.formattedPhoneNumbers}
          />
        </div>
      )}
      {info.formattedAddress && (
        <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <SimpleClickableInfo
            buttonLabel="Map"
            onClick={onMapClick}
            items={[info.formattedAddress]}
          />
        </div>
      )}
      {info.keywords && (
        <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          {info.keywords.join(", ")}
        </div>
      )}
      {info.description && (
        <div className="self-stretch py-[5px] justify-start items-start gap-2.5 flex flex-wrap">
          <div className="self-stretch text-gray-700 text-base font-normal leading-snug">
            {info.description}
          </div>
        </div>
      )}
    </div>
  );
}
