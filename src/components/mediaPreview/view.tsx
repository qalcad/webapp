import React from "react";
import Image from "next/image";
import BlankImageSVG from "../../../public/images/blank_image.svg";
import BlankVideoSVG from "../../../public/images/blank_video.svg";
import PlaySVG from "../../../public/images/play.svg";
import MediaDto from "../../models/mediaDto";

export interface Props {
  media?: MediaDto;
}

export default function MediaPreview({ media }: Props) {
  let src: string = BlankImageSVG;
  let mime: string = "blank/blank";

  if (media) {
    switch (media.mime) {
      case "video/mp4":
        src = media.thumbnailUrl || BlankVideoSVG;
        mime = media.mime;
        break;
      default:
        src = media.thumbnailUrl || BlankImageSVG;
        mime = media.mime;
    }
  }
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Image
        className="object-cover	object-center"
        src={src}
        alt="thumbnail"
        fill={true}
        sizes="100vw, 100%"
      />
      {mime == "video/mp4" && (
        <div className="w-6 h-6 relative opacity-50">
          <Image src={PlaySVG} alt="play" />
        </div>
      )}
    </div>
  );
}
