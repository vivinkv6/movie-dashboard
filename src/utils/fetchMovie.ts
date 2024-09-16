import { notFound } from "next/navigation";
export const fetchMovie = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Not Found Error");

      notFound();
    }
    return response.json();
  } catch (error) {
    console.log("Error Detected");

    console.log(error);
  }
};
