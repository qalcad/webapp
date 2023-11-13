import React from "react";
import MediaDto from "../../models/mediaDto";
import CloseSVG from "../../../public/images/Close.svg";
import ArrowLeftSVG from "../../../public/images/arrow_left.svg";
import ArrowRightSVF from "../../../public/images/arrow_right.svg";
import Image from "next/image";

export interface Props {
  media: MediaDto[];
  selected: number;
  open: boolean;
  onClose(event: React.MouseEvent<HTMLButtonElement>): void;
  onNext(event: React.MouseEvent<HTMLButtonElement>): void;
  onPrevious(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function GalleryViewer({
  media,
  selected,
  open,
  onClose,
  onNext,
  onPrevious
}: Props) {
  let selectedMedia: React.ReactNode;

  switch (media[selected].mime) {
    case "video/mp4":
      selectedMedia = (
        <video
          controls
          autoPlay
          src={media[selected].url}
          className="object-contain absolute inset-0 h-full w-full"
        />
      );
      break;
    default:
      selectedMedia = (
        <img
          src={media[selected].url}
          alt="image"
          className="object-contain absolute inset-0 h-full w-full"
        />
      );
  }
  return (
    <dialog
      open={open}
      className="h-full w-full fixed inset-0 bg-black/90 z-10"
    >
      <div className="flex w-full h-full flex-col">
        <div className="py-2 px-4 flex justify-end">
          <button
            className="hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex"
            onClick={onClose}
          >
            <div className="w-6 h-6 relative">
              <Image src={CloseSVG} alt="close" />
            </div>
          </button>
        </div>
        <div className="flex grow relative justify-center items-center w-full">
          {selectedMedia}
        </div>
        <div className="h-[56px] w-full">
          <div className="py-2 px-4 flex justify-center">
            <button
              disabled={selected == 0}
              className={`hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex ${
                selected == 0 ? "opacity-30" : ""
              }`}
              onClick={onPrevious}
            >
              <div className="w-6 h-6 relative">
                <Image src={ArrowLeftSVG} alt="previous" />
              </div>
            </button>
            <button
              disabled={selected >= media.length - 1}
              className={`hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex  ${
                selected >= media.length - 1 ? "opacity-30" : ""
              }`}
              onClick={onNext}
            >
              <div className="w-6 h-6 relative">
                <Image src={ArrowRightSVF} alt="next" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
