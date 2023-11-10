import React from "react";

export interface Props {
  items: string[];
  buttonLabel: string;
}

export default function SimpleClickableInfo({ items, buttonLabel }: Props) {
  return (
    <>
      {items.map((item, index) => (
        <>
          <div className="text-gray-700 text-base font-normal leading-snug">
            {item}
          </div>
          <button className="transition-all hover:transition-all text-sky-600 hover:text-sky-700 active:text-sky-900 text-base font-normal leading-snug">
            {buttonLabel}
          </button>
          {index != items.length - 1 && (
            <div className="text-gray-700 text-base font-medium leading-snug">
              -
            </div>
          )}
        </>
      ))}
    </>
  );
}
