import React from 'react';

const MovieDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0">
            <div className="bg-gray-700 w-64 h-80 rounded-lg mb-4 md:mb-0"></div>
          </div>
          <div className="md:ml-6 flex-grow">
            <h2 className="text-2xl font-bold mb-2">
              <div className="bg-gray-700 h-8 w-3/4 rounded"></div>
            </h2>
            <div className="text-gray-400 mb-4">
              <div className="bg-gray-700 h-6 w-1/4 rounded"></div>
            </div>
            <div className="text-gray-400 mb-4">
              <div className="bg-gray-700 h-6 w-1/2 rounded"></div>
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md mb-4">
              <div className="h-6 w-24"></div>
            </button>
            <div className="flex items-center mb-4">
              <div className="bg-gray-700 h-6 w-12 rounded"></div>
            </div>
            <div className="text-gray-400 mb-4">
              <div className="bg-gray-700 h-6 w-full rounded mb-2"></div>
              <div className="bg-gray-700 h-6 w-full rounded mb-2"></div>
              <div className="bg-gray-700 h-6 w-full rounded mb-2"></div>
              <div className="bg-gray-700 h-6 w-full rounded"></div>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-6">
          <div className="bg-gray-700 h-8 w-32 rounded"></div>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 w-24 h-32 rounded-lg"></div>
            <div className="text-gray-400 mt-2 text-center">
              <div className="bg-gray-700 h-4 w-16 rounded mb-1"></div>
              <div className="bg-gray-700 h-4 w-20 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 w-24 h-32 rounded-lg"></div>
            <div className="text-gray-400 mt-2 text-center">
              <div className="bg-gray-700 h-4 w-16 rounded mb-1"></div>
              <div className="bg-gray-700 h-4 w-20 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 w-24 h-32 rounded-lg"></div>
            <div className="text-gray-400 mt-2 text-center">
              <div className="bg-gray-700 h-4 w-16 rounded mb-1"></div>
              <div className="bg-gray-700 h-4 w-20 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-gray-700 w-24 h-32 rounded-lg"></div>
            <div className="text-gray-400 mt-2 text-center">
              <div className="bg-gray-700 h-4 w-16 rounded mb-1"></div>
              <div className="bg-gray-700 h-4 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
