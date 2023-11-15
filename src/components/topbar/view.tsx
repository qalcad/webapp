import React from "react";
import NavButton, { Props as INavButton } from "../navButton/view";
import Image from "next/image";
import LogoSVG from "../../../public/images/logo_circular.svg";

export interface Props {
  navs: INavButton[];
  variant: string;
}

export default function Topbar({ navs, variant }: Props) {
  return (
    <div
      className={`w-full justify-center items-start flex flex-wrap ${
        variant === "primary"
          ? "bg-blue-500 border-b border-blue-500"
          : "bg-white border-b border-zinc-200"
      }`}
    >
      {variant == "primary" && (
        <div className="h-14 px-4 justify-start items-center gap-4 flex">
          <div className="w-10 h-10 relative">
            <Image src={LogoSVG} alt="logo" />
          </div>
          <div className="text-white text-[22px] font-medium font-['Kanit'] leading-[30.80px]">
            QALCAD
          </div>
        </div>
      )}
      <div className="py-2 px-4 justify-center md:justify-end items-center gap-4 flex grow">
        <div className="justify-center items-center gap-2.5 flex  overflow-x-auto flex-wrap">
          {navs.map((item, index) => (
            <NavButton key={index} navVariant={variant} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
