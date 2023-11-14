import React from "react";

export interface Props {
  items: string[];
  buttonLabel: string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>, item: string): void;
}

export default function SimpleClickableInfo({
  items,
  buttonLabel,
  onClick = () => {}
}: Props) {
  return (
    <div className="shrink grow basis-0 flex leading-snug flex-wrap gap-2.5">
      {items.map((item, index) => (
        <div className="flex flex-wrap gap-2.5" key={index}>
          <div className="text-gray-700 text-base font-normal leading-snug">
            {item}
          </div>
          <button
            className="transition-all hover:transition-all text-sky-600 hover:text-sky-700 active:text-sky-900 text-base font-normal leading-snug"
            onClick={(event) => onClick(event, item)}
          >
            {buttonLabel}
          </button>
          {index != items.length - 1 && (
            <div className="text-gray-700 text-base leading-snug">•</div>
          )}
        </div>
      ))}
    </div>
  );
}
