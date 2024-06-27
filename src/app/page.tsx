"use client";
import Image from "next/image";
import { fetchMovie } from "@/utils/fetchMovie";
import { Movie } from "@/types/movie.type";
import { roboto } from "@/fonts/fonts";
import Link from "next/link";
import Nav from "@/components/Nav";
import { useGenreStore } from "@/store/genreStore";
import { useEffect, useRef, useState } from "react";
import { useSearchStore } from "@/store/searchStore";
import { header } from "@/fonts/fonts";
export default function Home() {
  const { genre } = useGenreStore();
  const { searchMovie } = useSearchStore();
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchMovie) {
        const fetchedMovies = await fetchMovie(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genre}`
        );
        setMovies(fetchedMovies.results);
      } else {
        const fetchedMovies = await fetchMovie(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchMovie}`
        );
        setMovies(fetchedMovies.results);
      }
    };

    fetchMovies();
  }, [genre, searchMovie]);

  if (!movies) {
    return <h1>No Movies List</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className={`bg-gray-950 p-4 md:w-1/4 text-center text-3xl font-bold md:fixed md:top-0 md:left-0 `}>
        MOVIE DASHBOARD
      </header>
      <div className="flex flex-col md:flex-row ">
        <Nav />
       
          {movies.length < 1 && (
             <div className="flex flex-row h-[100dvh] w-full justify-center items-center">
            <div className="border-2 border-orange-500 p-5 rounded-md">
              <h1>{searchMovie}: Movies not found</h1>
            </div>
            </div>
          )}
       
        <main className="w-full md:w-3/4 p-4 md:absolute md:top-0 md:right-0  bg-gray-950">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:place-items-center">
            {movies.map((movie: Movie) => (
              <div key={movie.id} className="bg-gray-950 p-4 ">
                <Link href={`/${movie.id}`}>
                  <div className="mb-2 rounded-lg hover:shadow-md hover:shadow-orange-500 transition-shadow duration-300">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${
                        !movie.poster_path
                          ? movie.backdrop_path
                          : movie.poster_path
                      }`}
                      loading="lazy"
                      width={270}
                      height={50}
                      className="rounded-md "
                      alt={movie.poster_path}
                    />
                    <p className={`${roboto.className} text-xl  m-2`}>
                      {movie.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
