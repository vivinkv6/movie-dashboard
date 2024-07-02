import { roboto } from "@/fonts/fonts";
import { Movie } from "@/types/movie.type";
import { fetchMovie } from "@/utils/fetchMovie";
import Image from "next/image";
import Link from "next/link";
import SkeletonCard from "./SkeletonCard";

type MovieCardProp = {
  genre: number;
  searchMovie: string;
};

async function MovieCard({ genre, searchMovie }: MovieCardProp) {

  // const imageLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }
  let movies: Movie[] = [];
  const page = Math.floor(Math.random() * 100) + 1;
  if (!searchMovie) {
    const data = await fetchMovie(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genre}&page=${page}`
    );
    movies = data.results;
  } else {
    const data = await fetchMovie(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchMovie}`
    );
    movies = data.results;
  }

  return (
    <>
      {movies?.length < 1 && (
        <div className="md:flex md:flex-row md:h-[100dvh] md:w-[100%] md:justify-center md:items-center">
          <div className="border-2 border-orange-500 p-5 rounded-md bg-red-500">
            <h1>{searchMovie}: Movies not found</h1>
          </div>
        </div>
      )}

      {movies.map((movie) => {
        return (
          <div key={movie.id} className="bg-gray-950 p-4 ">
            <Link href={`/${movie.id}`}>
              <div className="mb-2 rounded-lg hover:shadow-md hover:shadow-orange-500 transition-shadow duration-300">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${
                    !movie.poster_path ? movie.backdrop_path : movie.poster_path
                  }`}
                  unoptimized
                  width={290}
                  height={50}
                  className="rounded-md "
                  alt={movie.title}
                />
                <p className={`${roboto.className} text-xl  m-2`}>
                  {movie.title}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default MovieCard;
