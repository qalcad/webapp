import React from "react";
import Image from "next/image";
import BlankImageSVG from "../../../public/images/blank_image.svg";
import ImageSVG from "../../../public/images/image.svg";

export interface Props {
  imageSrc1?: string;
  imageSrc2?: string;
  imageSrc3?: string;
  imageSrc4?: string;
  imageSrc5?: string;
  remainingImgsCount?: number;
}

export default function GalleryPreview({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  remainingImgsCount
}: Props) {
  return (
    <div className="justify-center items-center flex flex-col h-[190px]">
      <div className="grow grid grid-cols-4 grid-rows-2 w-full  h-[190px]">
        <div className="col-span-2 row-span-2 flex justify-center">
          <Image height={195} src={imageSrc1 || BlankImageSVG} alt="image1" />
        </div>
        <div className="flex justify-center">
          <Image height={97.5} src={imageSrc2 || BlankImageSVG} alt="image2" />
        </div>
        <div className="flex justify-center">
          <Image height={97.5} src={imageSrc3 || BlankImageSVG} alt="image3" />
        </div>
        <div className="flex justify-center">
          <Image height={97.5} src={imageSrc4 || BlankImageSVG} alt="image4" />
        </div>
        <div className="flex justify-center relative">
          <Image height={97.5} src={imageSrc5 || BlankImageSVG} alt="image5" />
          <div className="w-full h-full bg-stone-900 bg-opacity-10 absolute flex justify-center">
            <div className="p-2.5 justify-center items-center gap-2.5 flex">
              <div className="text-zinc-500 text-base font-medium leading-snug">
                99+
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-zinc-200 w-full"></div>
    </div>
  );
}
