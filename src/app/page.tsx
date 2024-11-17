import Nav from "@/app/components/Nav";
import { useGenreStore } from "@/store/genreStore";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchStore } from "@/store/searchStore";
import MovieCard from "@/app/components/MovieCard";
import SkeletonCard from "./components/SkeletonCard";
import { fetchMovie } from "@/utils/fetchMovie";
import { Movie } from "@/types/movie.type";
import { redirect } from "next/navigation";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    genre: string;
    search: string;
    page?: string;
  };
}) {
  const page = Number(searchParams.page) || 1;
  let movies: Movie[] = [];

  if (searchParams.search) {
    const data = await fetchMovie(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchParams.search}&page=${page}`
    );
    movies = data.results;
  } else {
    const data = await fetchMovie(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchParams.genre ? searchParams.genre : "28"}&page=${page}`
    );
    movies = data.results;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header
        className={`bg-gray-950 p-4 md:w-1/4 text-center text-3xl font-bold md:fixed md:top-0 md:left-0  md:text-lg xl:text-xl h-full`}
      >
        MOVIE DASHBOARD
      </header>
      <div className="flex flex-col md:flex-row ">
        <Nav />

        <main className="w-full md:w-3/4 p-4 md:absolute md:top-0 md:right-0  bg-gray-950">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:place-items-center">
            <Suspense fallback={<SkeletonCard />}>
              <MovieCard movies={movies} />
            </Suspense>
           
          </div>
        </main>
      </div>
    </div>
  );
}
