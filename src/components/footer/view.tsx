import React from "react";
import Image from "next/image";
import LinkedInSVG from "../../../public/images/linkedin.svg";
import LogoSVG from "../../../public/images/logo_circular.svg";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="w-full self-stretch h-[0px] border border-zinc-200"></div>
      <div className="w-full p-8 bg-neutral-100 flex-col justify-center items-center gap-2.5 flex font-kanit">
        <div className="justify-center items-center gap-2.5 flex md:flex-row flex-col">
          <button className="p-2 transition-all hover:transition-all text-zinc-400 hover:text-zinc-500 active:text-zinc-600 text-xs font-normal leading-none">
            Terms of Use
          </button>
          <button className="p-2 transition-all hover:transition-all text-zinc-400 hover:text-zinc-500 active:text-zinc-600 text-xs font-normal leading-none">
            Privacy Policy
          </button>
          <button className="p-2 transition-all hover:transition-all text-zinc-400 hover:text-zinc-500 active:text-zinc-600 text-xs font-normal leading-none">
            About Us
          </button>
          <button className="p-2 transition-all hover:transition-all relative hover:bg-neutral-200 active:bg-neutral-300 rounded-full">
            <Image src={LinkedInSVG} alt="linkedin" className="w-[17px]" />
          </button>
        </div>
        <div className="sjustify-center items-center gap-4 flex">
          <div className="w-10 h-10 relative">
            <div className="w-10 h-10 left-0 top-0 absolute">
              <div className="w-10 h-10 left-0 top-0 absolute bg-zinc-300 rounded-full">
                <Image src={LogoSVG} alt="logo" />
              </div>
            </div>
          </div>
          <div className="text-gray-700 text-base font-medium font-['Kanit'] leading-snug">
            QALCAD
          </div>
        </div>
      </div>
    </div>
  );
}
