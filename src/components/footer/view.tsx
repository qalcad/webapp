import React from "react";
import Image from "next/image";
import LinkedInSVG from "../../../public/images/linkedin.svg";
import LogoSVG from "../../../public/images/logo_circular.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="w-full self-stretch h-[0px] border border-zinc-200"></div>
      <div className="w-full p-4 bg-neutral-100 flex-col justify-center items-center gap-2 flex font-kanit">
        <div className="justify-center items-center gap-2 flex md:flex-row flex-col">
          <button
            disabled
            className="p-2 transition-all hover:transition-all text-zinc-300 text-xs font-normal leading-none"
          >
            Terms of Use
          </button>
          <button
            disabled
            className="p-2 transition-all hover:transition-all text-zinc-300 text-xs font-normal leading-none"
          >
            Privacy Policy
          </button>
          <Link
            href="/about-us"
            className="p-2 transition-all hover:transition-all text-zinc-400 hover:text-zinc-500 active:text-zinc-600 text-xs font-normal leading-none"
          >
            About Us
          </Link>
          <Link
            href="https://www.linkedin.com/company/qalcad"
            target="_blank"
            className="p-2 transition-all hover:transition-all relative hover:bg-neutral-200 active:bg-neutral-300 rounded-full"
          >
            <Image src={LinkedInSVG} alt="linkedin" className="w-[17px]" />
          </Link>
        </div>
        <div className="sjustify-center items-center gap-4 flex">
          <div className="w-10 h-10 relative">
            <Image src={LogoSVG} alt="logo" />
          </div>
          <div className="text-gray-700 text-base font-medium font-['Kanit'] leading-snug">
            QALCAD
          </div>
        </div>
      </div>
    </div>
  );
}
