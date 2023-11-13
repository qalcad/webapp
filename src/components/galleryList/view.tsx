"use client";
import React from "react";
import MediaDto from "../../models/mediaDto";
import MediaPreview from "../mediaPreview/view";
import GalleryViewer from "../galleryViewer/view";

export interface Props {
  media: MediaDto[];
}

export default function GalleryList({ media }: Props) {
  const [selectedMedia, setSelectedMedia] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
      setSelectedMedia(index);
      setIsOpen(true);
    },
    [setSelectedMedia, setIsOpen]
  );

  const onClose = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => setIsOpen(false),
    [setIsOpen]
  );
  const onNext = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (selectedMedia < media.length - 1) setSelectedMedia(selectedMedia + 1);
    },
    [setSelectedMedia, selectedMedia]
  );
  const onPrevious = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (selectedMedia > 0) setSelectedMedia(selectedMedia - 1);
    },
    [setSelectedMedia, selectedMedia]
  );
  return (
    <>
      <div
        id="gallery"
        className="w-full p-8 grid grid-cols-2 md:grid-cols-4 gap-2.5"
      >
        {media.map((item, index) => (
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              onClick(event, index)
            }
            key={index}
            className="bg-stone-100 h-[190px] rounded-lg overflow-hidden	"
          >
            <MediaPreview media={item} />
          </button>
        ))}
      </div>
      <GalleryViewer
        media={media}
        selected={selectedMedia}
        open={isOpen}
        onClose={onClose}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </>
  );
}
