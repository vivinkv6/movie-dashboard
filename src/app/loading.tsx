import Link from "next/link";
import Nav from "@/components/Nav";

const Home: React.FC = () => {
  // Dummy data for movie skeleton cards
  const movieSkeletons = Array(12).fill(0);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="bg-gray-950 p-4 text-center text-3xl font-bold md:fixed md:top-0 md:left-0 md:w-1/4">
        Movie Dashboard
      </header>
      <div className="flex flex-col md:flex-row">
        <Nav />
        <main className="ms-24 w-full md:w-3/4 p-4 md:ml-2/4 bg-gray-950">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:place-items-center">
            {movieSkeletons.map((_, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg hover:shadow-md hover:shadow-orange-500 transition-shadow duration-300"
              >
                <Link href="#">
                  <div className="mb-2 rounded">
                    <div className="w-full h-64 bg-gray-700 rounded-md flex items-center justify-center">
                      {/* Placeholder for movie poster */}
                    </div>
                    <div className="mt-2 bg-gray-700 h-6 rounded w-3/4 mx-auto"></div>
                    <div className="mt-2 bg-gray-700 h-4 rounded w-1/2 mx-auto"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
