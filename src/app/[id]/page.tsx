import { fetchMovie } from "@/utils/fetchMovie";
import Image from "next/image";
import Male from "../../../public/male.jpg";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Modal from "../components/Modals";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const movieDetails = await fetchMovie(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return {
    title: {
      absolute: movieDetails?.title,
    },
  };
};
export default async function MovieDetails({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const movieDetails = fetchMovie(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const castDetails = fetchMovie(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const [movie, casts] = await Promise.all([movieDetails, castDetails]);

  const trailer = await fetchMovie(
    `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  let star = "★";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 max-sm:p-0  flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-row max-sm:flex-col max-sm:gap-0 max-md:gap-5 ">
          <div className="flex-shrink-0" key={movie.id}>
            {/* <div className="bg-gray-700 w-64 h-80 rounded-lg"> */}
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              unoptimized
              className="rounded-md"
              height={300}
              width={250}
              alt={movie.title}
            />
            {/* </div> */}
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{movie.tagline}</p>
            <div className="text-gray-400 mb-4">
              <span>{new Date(movie.release_date).getFullYear()}</span> •{" "}
              <span className="bg-gray-400 text-white rounded-sm py-1 px-2">
                {movie.adult ? "A" : "U/A"}
              </span>{" "}
              • <span>{(movie.runtime / 60).toFixed(1)}h</span> •{" "}
              <span className="bg-blue-500 text-white rounded-sm py-1 px-2">
                {movie.status}
              </span>
            </div>
            <div className="text-gray-400 mb-4">
              {movie.genres.map(
                (genre: { id: string; name: string }) => genre.name
              )}
            </div>
            <div className="flex flex-row justify-start gap-5 ">
              {trailer?.results?.length > 0 && (
                <Modal videoId={trailer?.results[0]?.key} />
              )}

              <div className="flex items-center">
                <span className="text-yellow-500 text-3xl">
                  {" "}
                  {movie.vote_average < 5
                    ? star.repeat(Math.round(movie.vote_average))
                    : star.repeat(Math.round(movie.vote_average) / 2)}
                </span>
              </div>
            </div>
            <div className="text-gray-400 mt-4 ">
              <p className="max-lg:h-36 max-lg:text-ellipsis overflow-hidden whitespace-wrap">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>

        {casts?.cast?.length > 0 && (
          <h3 className="text-xl font-bold mt-6">Cast</h3>
        )}
        <div className="flex flex-row overflow-x-scroll gap-10 mt-4">
          {casts?.cast?.map(
            (cast: {
              id: number;
              profile_path: string;
              name: string;
              character: string;
              gender: number;
            }) => {
              return (
                <div className="flex flex-col items-center" key={cast.id}>
                  <div className="bg-gray-700 w-40 h-30 rounded-lg">
                    {cast.profile_path ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        unoptimized
                        className="rounded-md"
                        height={300}
                        width={550}
                        alt={cast.name}
                      />
                    ) : (
                      <Image
                        src={Male}
                        className="rounded-md h-60 w-60"
                        unoptimized
                        alt={cast.name}
                      />
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-gray-200 ">{cast.name}</p>
                    <p className="text-xs text-gray-400">{cast.character}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
