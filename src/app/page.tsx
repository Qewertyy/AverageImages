"use client";
import Images, { imageProps } from "@/components/page";
import { SearchImages } from "@/lib/searchImages";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<imageProps[]>([]);
  const [search, setSearch] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [warning, setWarning] = useState(false);
  const [engine, setEngine] = useState("google");

  const loadMoreImages = () => {
    if (warning) return alert("would you stop spamming bruv?");
    setWarning(true);
    setCurrentPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      setWarning(false);
    }, 2000);
  };

  useEffect(() => {
    if (!startSearch) return;
    SearchImages(search, engine, currentPage).then((res) => {
      setImages((prevImages) => [...prevImages, ...res]);
    });
  }, [startSearch, search, currentPage]);
  return (
    <main className="flex min-h-screen flex-col items-center pt-5 gap-5">
      <h1 className="text-3xl font-bold">AverageImages</h1>
      <p>Select a Search Engine</p>
      <div className="flex items-center flex-row justify-center gap-5">
        <div className="flex items-center">
          <input
            checked={engine == "google"}
            id="googleBtn"
            type="radio"
            onChange={() => setEngine("google")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="googleBtn"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Google
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="bingBtn"
            checked={engine == "bing"}
            type="radio"
            onChange={() => setEngine("bing")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="bingBtn"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Bing
          </label>
        </div>
      </div>
      <div className="pt-1 relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.currentTarget?.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-4 mr-4"
          onClick={() => setStartSearch(search ? true : false)}
        >
          <svg
            className="text-gray-600 h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      {startSearch && images.length == 0 && <p>Searching...</p>}
      {images.length > 0 && (
        <>
          <Images images={images} query={search} started={startSearch} />
          <button
            onClick={loadMoreImages}
            type="button"
            className="text-black bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:hover:bg-black-700 hover:text-white dark:focus:ring-gray-700 dark:border-gray-700"
          >
            View More
          </button>
        </>
      )}
    </main>
  );
}
