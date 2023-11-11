import React from "react";
import MediaPjo from "../../models/mediaPjo";
import MediaPreview from "../mediaPreview/view";

export interface Props {
  media: MediaPjo[];
  remainingImgsCount?: number;
}

export default function GalleryPreview({ media, remainingImgsCount }: Props) {
  return (
    <div
      className={`justify-center items-center flex flex-col ${
        media.length > 0 && "cursor-pointer"
      }`}
    >
      <div className="grow grid gap-px grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-2 w-full h-[190px]">
        <div className="col-span-2 row-span-2 flex relative">
          <MediaPreview media={media[0]} />
        </div>
        <div className="justify-center hidden md:flex relative">
          <MediaPreview media={media[1]} />
        </div>
        <div className="justify-center hidden md:flex relative">
          <MediaPreview media={media[2]} />
        </div>
        <div className="justify-center hidden md:flex relative">
          <MediaPreview media={media[3]} />
        </div>
        <div className="justify-center relative hidden md:flex">
          <MediaPreview media={media[4]} />
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
