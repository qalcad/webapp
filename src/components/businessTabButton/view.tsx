import React from "react";
import Image from "next/image";
import BusinessHomeSVG from "../../../public/images/business_info.svg";
import BusinessGallerySVG from "../../../public/images/image.svg";
import BusinessLocationSVG from "../../../public/images/map.svg";
import BusinessNewsSVG from "../../../public/images/news.svg";
import BusinessInquirySVG from "../../../public/images/inquiry.svg";

export interface Props {
  label: string;
  variant: string;
  disabled: boolean;
  href?: string;
  active?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function BusinessTabButton({
  label,
  variant,
  disabled,
  href,
  active,
  onClick
}: Props) {
  let Icon: React.ReactNode;

  switch (variant) {
    case "inquiry":
      Icon = <Image src={BusinessInquirySVG} alt={label} />;
      break;
    case "gallery":
      Icon = <Image src={BusinessGallerySVG} alt={label} />;
      break;
    case "location":
      Icon = <Image src={BusinessLocationSVG} alt={label} />;
      break;
    case "news":
      Icon = <Image src={BusinessNewsSVG} alt={label} />;
      break;
    case "home":
    default:
      Icon = <Image src={BusinessHomeSVG} alt={label} />;
  }

  return (
    <button
      disabled={disabled}
      className={`transition-all hover:transition-all mh-[62px] pt-2 flex-col justify-center items-center py-2 px-2.5 inline-flex border-b-2 ${
        active && !disabled ? "border-sky-600" : "border-transparent"
      } ${disabled ? "opacity-30" : ""} ${
        !active && !disabled
          ? "hover:border-stone-200 active:border-stone-300"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="w-6 h-6 relative">{Icon}</div>
      <div className="text-gray-700 text-lg font-normal">{label}</div>
    </button>
  );
}
