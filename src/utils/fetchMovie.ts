export const fetchMovie = async (url: string) => {
  const response = await fetch(url,{
    cache:'force-cache'
  });
  return response.json();
};
