import React from "react";
import HomeSVG from "../../../public/images/home_gray.svg";
import SearchSVG from "../../../public/images/search_gray.svg";
import QalcadSVG from "../../../public/images/qalcad_gray.svg";
import Image from "next/image";

export interface Props {
  label: string;
  variant: string;
  active: boolean;
}

export default function NavButton({ label, variant }: Props) {
  let getVariantIcon = (label: string, variant: string) => {
    switch (variant) {
      case "home":
        return <Image src={HomeSVG} alt={label} />;
      case "search":
        return <Image src={SearchSVG} alt={label} />;
      case "qalcad":
      default:
        return <Image src={QalcadSVG} alt={label} />;
    }
  };
  return (
    <button className="h-10 px-7 py-2.5 rounded-lg justify-center items-center flex hover:bg-qgray1">
      <div className="w-6 h-6 relative">{getVariantIcon(label, variant)}</div>
    </button>
  );
}
