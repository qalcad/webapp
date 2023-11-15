import React from "react";
import BusinessTabButton, {
  Props as BusinessTabButtonProps
} from "../businessTabButton/view";

export interface Props {
  tabs: BusinessTabButtonProps[];
}

export default function BusinessTabs({ tabs }: Props) {
  return (
    <div className="w-full px-8 justify-center items-center gap-2.5 flex flex-wrap flex-row font-kanit">
      {tabs.map((item, index) => (
        <BusinessTabButton key={index} {...item} />
      ))}
    </div>
  );
}
