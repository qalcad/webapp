"use client";

import React from "react";
import BusinessTabButton, {
  Props as BusinessTabButtonProps
} from "../businessTabButton/view";
import { usePathname, useRouter } from "next/navigation";

export interface Props {
  tabs: BusinessTabButtonProps[];
  businessSlug: string;
}

export default function BusinessTabs({ tabs, businessSlug }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="w-full px-8 justify-center items-center gap-2.5 flex flex-wrap flex-row font-kanit">
      {tabs.map((item, index) => (
        <BusinessTabButton
          key={index}
          {...item}
          active={pathname == `/b/${businessSlug}${item.href}`}
          onClick={(event) => {
            console.log(`/b/${businessSlug}${item.href}`);
            if (
              item.href !== null &&
              item.href !== undefined &&
              pathname != `/b/${businessSlug}${item.href}`
            )
              router.push(`/b/${businessSlug}${item.href}`);
          }}
        />
      ))}
    </div>
  );
}
