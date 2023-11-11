import React from "react";
import MediaPjo from "../../models/mediaPjo";
import Image from "next/image";
import BlankImageSVG from "../../../public/images/blank_image.svg";
import BlankVideoSVG from "../../../public/images/blank_video.svg";
import PlaySVG from "../../../public/images/play.svg";

export interface Props {
  media: MediaPjo;
}

export default function MediaPreview({ media }: Props) {
  let src: string;
  switch (media.mime) {
    case "video/mp4":
      src = media.thumbnailUrl || BlankVideoSVG;
      break;
    default:
      src = media.thumbnailUrl || BlankImageSVG;
  }
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        src={src}
        alt="thumbnail"
        fill={true}
        objectFit="cover"
        objectPosition="center"
      />
      {media.mime == "video/mp4" && (
        <div className="w-6 h-6 relative opacity-50">
          <Image src={PlaySVG} alt="play" />
        </div>
      )}
    </div>
  );
}
