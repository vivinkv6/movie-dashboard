function NotFound() {
  console.log("Display not found error");
  return (
    <div className="w-[100%] h-[100dvh] flex flex-col justify-center items-center bg-gray-950 text-white gap-5">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="text-xl font-semibold">File Not Found</p>
    </div>
  );
}

export default NotFound;
