const SkeletonCard = () => {
  return (
    <>
      {Array(12)
        .fill(0)
        .map((index) => {
          return (
            <div
              key={index}
              className="bg-gray-900 min-w-full max-sm:mx-20 p-4 rounded-lg hover:shadow-md hover:shadow-orange-500 transition-shadow duration-300"
            >
              <div className="mb-2 rounded">
                <div className="w-full h-64 bg-gray-700 rounded-md"></div>
                <div className="mt-2 bg-gray-700 h-6 rounded w-3/4 mx-auto"></div>
                <div className="mt-2 bg-gray-700 h-4 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SkeletonCard;
