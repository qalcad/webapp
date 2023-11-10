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
  active: boolean;
  disabled: boolean;
}

export default function BusinessTabButton({
  label,
  variant,
  active,
  disabled
}: Props) {
  let getVariantIcon = (label: string, variant: string) => {
    switch (variant) {
      case "inquiry":
        return <Image src={BusinessInquirySVG} alt={label} />;
      case "gallery":
        return <Image src={BusinessGallerySVG} alt={label} />;
      case "location":
        return <Image src={BusinessLocationSVG} alt={label} />;
      case "news":
        return <Image src={BusinessNewsSVG} alt={label} />;
      case "home":
      default:
        return <Image src={BusinessHomeSVG} alt={label} />;
    }
  };

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
    >
      <div className="w-6 h-6 relative">{getVariantIcon(label, variant)}</div>
      <div className="text-gray-700 text-lg font-normal">{label}</div>
    </button>
  );
}
