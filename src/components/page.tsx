import Image from "next/image";
import React, { Component } from "react";

export interface imageProps {
  id: string;
  imageUrl: string;
  title: string;
  previewUrl: string;
  url: string;
}

interface Props {
  images: imageProps[];
  query?: string;
  started?: boolean;
}

export const ItemSection = ({ images: items }: Props) => {
  return (
    <div className="grid gap-4">
      {items.map((item,index) => (
        <div
        key={item.id+index}
        onClick={() => window.open(item.url, "_blank")}
        className="flex justify-center items-center flex-col"
        >
          <Image
            className="h-auto max-w-full rounded-lg cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out pb-4"
            src={item.imageUrl}
            alt={item.title}
          />
          <button
            onClick={() => window.open(item.imageUrl, "_blank")}
            type="button"
            className="text-black bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-black-700 hover:text-white dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
};
export default function Images({ images, query, started }: Props) {
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images
            .reduce((acc: imageProps[][], item, index) => {
              if (index % 3 === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(item);
              return acc;
            }, [])
            .map((group, index) => (
              <ItemSection key={index} images={group} />
            ))}
        </div>
      </div>
    </div>
  );
}
