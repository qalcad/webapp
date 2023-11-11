"use client";
import React from "react";
import HomeSVG from "../../../public/images/home_gray.svg";
import SearchSVG from "../../../public/images/search_gray.svg";
import QalcadSVG from "../../../public/images/qalcad_gray.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export interface Props {
  label: string;
  variant: string;
  url: string;
}

export default function NavButton({ label, variant, url }: Props) {
  const router = useRouter();
  const pathname = usePathname();
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

  const onClick = React.useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>, url: string) => {
      if (pathname != url) router.push(url);
    },
    [pathname, router]
  );

  return (
    <button
      className={`hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex hover:bg-gray-200 active:bg-gray-300 ${
        pathname == url ? "bg-gray-200" : ""
      }`}
      onClick={(event) => onClick(event, url)}
    >
      <div className="w-6 h-6 relative">{getVariantIcon(label, variant)}</div>
    </button>
  );
}
