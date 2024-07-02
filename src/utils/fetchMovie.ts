
import { notFound } from "next/navigation";
export const fetchMovie = async (url: string) => {
  const response = await fetch(url,{
    signal:AbortSignal.timeout(5000)
  });
  if(!response.ok){
      notFound()
  }
  return response.json();
};
