const SkeletonCard = () => {

  return (
    <>
      {Array(12)
  .fill(0)
  .map((_, index) => {
    return (
      <div
        key={index}
        className={`min-w-full max-sm:mx-20 p-4 rounded-lg border-2 border-gray-500`}
      >
        <div className="mb-2 rounded ">
          <div className="w-full h-80 bg-gray-700 rounded-md bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-size-200 bg-pos-0 animate-shimmer"></div>
          <div className="mt-2 bg-gray-700 h-6 rounded w-3/4 mx-auto bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-size-200 bg-pos-0 animate-shimmer"></div>
          <div className="mt-2 bg-gray-700 h-4 rounded w-1/2 mx-auto bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-size-200 bg-pos-0 animate-shimmer"></div>
        </div>
      </div>
    );
  })}

    </>
  );
};

export default SkeletonCard;
