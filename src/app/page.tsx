// "use client"
import Image from "next/image";
import { genres } from "@/constant/genres";
import { fetchMovie } from "@/utils/fetchMovie";
import { Movie } from "@/types/movie.type";
import {roboto} from '@/fonts/fonts';
export default async function Home() {
  const movies = await fetchMovie(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!movies) {
    return <h1>No Movies List</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-gray-950 p-4 md:w-1/4 text-center text-3xl font-bold md:fixed md:top-0 md:left-0 ">
        Movie Dashboard
      </header>
      <div className="flex flex-col md:flex-row ">
        <nav className="w-full md:w-1/4 bg-gray-950 p-4 md:fixed md:top-16 md:left-0 md:h-[100dvh]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-4 p-2 rounded bg-gray-900 text-white placeholder-gray-600"
          />
          <ul className="max-sm:flex max-sm:flex-row max-sm:gap-5 max-sm:overflow-x-scroll md:flex md:flex-row md:gap-5 md:flex-wrap">
            {genres.map((category) => (
              <li key={category.id} className="mb-2">
                <button className="w-full max-sm:w-auto text-left p-2 rounded bg-gray-900 hover:bg-gray-600">
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <main className="w-full md:w-3/4 p-4 md:absolute md:top-0 md:right-0  bg-gray-950">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:place-items-center">
            {movies.results.map((movie:Movie) => (
              <div key={movie.id} className="bg-gray-900 p-4 rounded-lg">
                <div className="mb-2 rounded">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    width={270}
                    height={50}
                    className="rounded-sm"
                    alt={movie.poster_path}
                  />
                   <p className={`${roboto.className} text-xl  m-2`}>{movie.title}</p>
                </div>
               
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
