"use client";
type ErrorProp = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProp) {
    console.log(error);
    
  return (
    <div className="w-[100%] h-[100dvh] flex flex-col justify-center items-center bg-gray-950 text-white gap-5">
      <h1 className="text-xl max-sm:text-lg text-center font-semibold">Something Went Wrong Please Try again Later</h1>
      <button onClick={()=>reset} className="bg-orange-500 py-2 px-4 rounded">Try Again</button>
    </div>
  );
}
