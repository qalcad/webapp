"use client";
import React from "react";
import HomeSVG from "../../../public/images/home.svg";
import SearchSVG from "../../../public/images/search.svg";
import QalcadSVG from "../../../public/images/qalcad.svg";
import HomeSecSVG from "../../../public/images/home_gray.svg";
import SearchSecSVG from "../../../public/images/search_gray.svg";
import QalcadSecSVG from "../../../public/images/qalcad_gray.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export interface Props {
  label: string;
  variant: string;
  href: string;
  navVariant?: string;
}

export default function NavButton({ label, variant, href, navVariant }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  let Icon: React.ReactNode;
  switch (variant) {
    case "home":
      Icon = (
        <Image
          src={navVariant == "primary" ? HomeSVG : HomeSecSVG}
          alt={label}
        />
      );
      break;
    case "search":
      Icon = (
        <Image
          src={navVariant == "primary" ? SearchSVG : SearchSecSVG}
          alt={label}
        />
      );
      break;
    case "qalcad":
    default:
      Icon = (
        <Image
          src={navVariant == "primary" ? QalcadSVG : QalcadSecSVG}
          alt={label}
        />
      );
  }

  const onClick = React.useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>, href: string) => {
      if (pathname != href) router.push(href);
    },
    [pathname, router]
  );

  return (
    <button
      className={`hover:transition-all transition-all h-10 px-7 py-2.5 rounded-lg justify-center items-center flex 
      ${
        pathname == href
          ? navVariant == "primary"
            ? "bg-blue-600"
            : "bg-gray-200"
          : ""
      }
      ${
        navVariant == "primary"
          ? "hover:bg-blue-600 active:bg-blue-700"
          : "hover:bg-gray-200 active:bg-gray-300"
      }
      `}
      onClick={(event) => onClick(event, href)}
    >
      <div className="w-6 h-6 relative">{Icon}</div>
    </button>
  );
}
