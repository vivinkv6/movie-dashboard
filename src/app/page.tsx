"use client";
import Nav from "@/app/components/Nav";
import { useGenreStore } from "@/store/genreStore";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchStore } from "@/store/searchStore";
import MovieCard from "@/app/components/MovieCard";
import SkeletonCard from "./components/SkeletonCard";
export default function Home() {
  const genre = useGenreStore((state)=>state.genre);
  const  searchMovie  = useSearchStore((state)=>state.searchMovie);
  
  // const [movies, setMovies] = useState<Movie[] | null>(null);
const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    
    console.log({genre,searchMovie});
    setIsClient(true)
    
  }, [isClient,genre,searchMovie]);

  // if (!movies) {
  //   return (
  //     <div className="bg-gray-950 h-[100dvh] w-[100%] flex justify-center items-center">
  //       <header
  //         className={`bg-gray-950 text-white p-4 md:w-1/4 text-center text-5xl max-sm:text-xl font-bold `}
  //       >
  //         MOVIE DASHBOARD
  //       </header>
  //     </div>
  //   );
  // }

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
            {/* {movies?.map((movie: Movie) => ( */}
            <Suspense fallback={<SkeletonCard/>}>
              <MovieCard genre={genre} searchMovie={searchMovie}  />
              </Suspense>
            {/* ))} */}
          </div>
        </main>
      </div>
    </div>
  );
}
