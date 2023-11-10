import React from "react";
import Image from "next/image";
import ShareSVG from "../../../public/images/share.svg";

export default function ShareButton() {
  return (
    <button className="transition-all hover:transition-all p-2.5 bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-lg justify-center items-center gap-[5px] flex">
      <div className="text-white text-base font-medium leading-snug">Share</div>
      <div className="w-6 h-6 relative">
        <Image src={ShareSVG} alt="share" />
      </div>
    </button>
  );
}
