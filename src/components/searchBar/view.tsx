import React from "react";
import Image from "next/image";
import SearchBarSVG from "../../../public/images/search_bar.svg";

export default function SearchBar() {
  return (
    <div className="w-full px-4 py-4 bg-blue-500 justify-start items-center gap-2.5 inline-flex">
      <form className="w-full">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only grow"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Image src={SearchBarSVG} alt="search" />
          </div>
          <input
            type="search"
            name="q"
            className="block shadow-md w-full p-2.5 ps-10 text-sm text-gray-700 border border-gray-300 rounded-xl bg-white focus:ring-blue-500 outline-none"
            placeholder="Search businesses, etc..."
            required
          />
        </div>
      </form>
    </div>
  );
}
