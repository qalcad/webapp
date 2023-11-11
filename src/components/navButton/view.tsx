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
  href: string;
}

export default function NavButton({ label, variant, href }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  let Icon: React.ReactNode;
  switch (variant) {
    case "home":
      Icon = <Image src={HomeSVG} alt={label} />;
      break;
    case "search":
      Icon = <Image src={SearchSVG} alt={label} />;
      break;
    case "qalcad":
    default:
      Icon = <Image src={QalcadSVG} alt={label} />;
  }

  const onClick = React.useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>, href: string) => {
      if (pathname != href) router.push(href);
    },
    [pathname, router]
  );

  return (
    <button
      className={`hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex hover:bg-gray-200 active:bg-gray-300 ${
        pathname == href ? "bg-gray-200" : ""
      }`}
      onClick={(event) => onClick(event, href)}
    >
      <div className="w-6 h-6 relative">{Icon}</div>
    </button>
  );
}
