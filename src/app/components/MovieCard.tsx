import { roboto } from "@/fonts/fonts";
import { Movie } from "@/types/movie.type";
import { fetchMovie } from "@/utils/fetchMovie";
import Image from "next/image";
import Link from "next/link";
import SkeletonCard from "./SkeletonCard";
import { Fragment } from "react";
import { notFound } from "next/navigation";

type MovieCardProp = {
  movies: Movie[];
};

async function MovieCard({ movies }: MovieCardProp) {
  if (!movies || movies.length === 0) {
    notFound();
  }

  // const imageLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }

  return (
    <Fragment>
      {movies?.length < 1 && (
        <div className="md:flex md:flex-row md:h-[100dvh] md:w-[100%] md:justify-center md:items-center">
          <div className="border-2 border-orange-500 p-5 rounded-md bg-red-500">
            <h1> Movie not found</h1>
          </div>
        </div>
      )}

      {movies.map((movie: Movie) => {
        return (
          <Fragment key={movie.id}>
            {(movie.poster_path || movie.backdrop_path) && (
              <div className="bg-gray-950 p-4 w-[280px] max-sm:w-[300px]">
                <Link href={`/${movie.id}`}>
                  <div className="rounded-lg hover:shadow-md hover:shadow-orange-500 transition-shadow duration-300">
                    <div className="aspect-[2/3] relative">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${
                          movie.poster_path || movie.backdrop_path
                        }`}
                        unoptimized
                        fill
                        className="rounded-md object-cover"
                        alt={movie.title}
                      />
                    </div>
                    {/* <p className={`${roboto.className} text-xl my-2 truncate`}>
                      {movie.title}
                    </p> */}
                  </div>
                </Link>
              </div>
            )}
          </Fragment>
        );
      })}
     
    </Fragment>
  );
}

export default MovieCard;
