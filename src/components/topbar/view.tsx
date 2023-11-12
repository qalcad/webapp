import React from "react";
import NavButton, { Props as INavButton } from "../navButton/view";

export interface IProps {
  navs: INavButton[];
  variant: string;
}

export default function Topbar({ navs }: IProps) {
  return (
    <div className="w-full justify-center items-center flex flex-col bg-white">
      <div className="py-2 px-4 justify-start items-center gap-4 flex ">
        <div className="justify-center items-center gap-2.5 flex  overflow-x-auto flex-wrap">
          {navs.map((item, index) => (
            <NavButton key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="border-b border-zinc-200 w-full"></div>
    </div>
  );
}
