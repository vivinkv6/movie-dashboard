"use client";

import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useState,
} from "react";
import { genres } from "@/constant/genres";
import { useGenreStore } from "@/store/genreStore";
import clsx from "clsx";
import { useSearchStore } from "@/store/searchStore";

function Nav() {
  const genre = useGenreStore((state) => state.genre);
  const addGenre = useGenreStore((state) => state.addGenre);
  const addSearch = useSearchStore((state) => state.addSearch);
  const searchMovie = useSearchStore((state) => state.searchMovie);
  const [search, setSearch] = useState<string>(searchMovie);

  return (
    <nav className="w-full md:w-1/4 bg-gray-950 p-4 md:fixed md:top-16 md:left-0 md:h-[100dvh]">
      <div className="flex flex-row gap-5 items-center justify-center mb-4 ">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded bg-gray-900 text-white placeholder-gray-600"
        />
        <button
          className="bg-orange-600 text-white rounded-md px-2 py-2"
          onClick={() => {
            addSearch(search);
            console.log(search);
          }}
        >
          Search
        </button>
      </div>
      <ul className="max-sm:flex max-sm:flex-row max-sm:gap-5 max-sm:overflow-x-scroll md:flex md:flex-row md:gap-5 md:flex-wrap">
        {genres.map((category) => (
          <li key={category.id} className="mb-2">
            <button
              onClick={() => {
                addGenre(category.id);
                addSearch("");
              }}
              className={clsx(
                "w-full max-sm:w-auto text-left p-2 rounded bg-gray-900 hover:bg-gray-600",
                {
                  "bg-orange-600": genre == category.id,
                }
              )}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
