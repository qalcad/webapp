import React from "react";
import Image from "next/image";
import BlankImageSVG from "../../../public/images/blank_image.svg";
import ImageSVG from "../../../public/images/image.svg";

export interface Props {
  imageSrcs: string[];
  remainingImgsCount?: number;
}

export default function GalleryPreview({
  imageSrcs,
  remainingImgsCount
}: Props) {
  return (
    <div
      className={`justify-center items-center flex flex-col ${
        imageSrcs.length > 0 && "cursor-pointer"
      }`}
    >
      <div className="grow grid gap-px grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 w-full h-[190px]">
        <div className="col-span-2 row-span-2 flex relative">
          <Image
            src={imageSrcs[0] || BlankImageSVG}
            alt="image1"
            fill={true}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="justify-center hidden md:flex relative">
          <Image src={imageSrcs[1] || BlankImageSVG} alt="image2" fill={true} />
        </div>
        <div className="justify-center hidden md:flex relative">
          <Image fill={true} src={imageSrcs[2] || BlankImageSVG} alt="image3" />
        </div>
        <div className="justify-center hidden md:flex relative">
          <Image fill={true} src={imageSrcs[3] || BlankImageSVG} alt="image4" />
        </div>
        <div className="justify-center relative hidden md:flex">
          <Image fill={true} src={imageSrcs[4] || BlankImageSVG} alt="image5" />
          <div className="w-full h-full bg-stone-900 bg-opacity-40 absolute flex justify-center">
            <div className="p-2.5 justify-center items-center gap-2.5 flex">
              <div className="text-neutral-200 text-base font-medium leading-snug">
                {remainingImgsCount || 0}+
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-zinc-200 w-full"></div>
    </div>
  );
}
