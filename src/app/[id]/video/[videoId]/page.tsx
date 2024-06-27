"use client";
import ReactPlayer from "react-player";

function VideoTrailer({
  params,
}: {
  params: {
    videoId: string;
  };
}) {
  console.log(params.videoId);

  return (
    <div className="h-[100vh] w-[100%] bg-gray-950 flex justify-center items-center">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${params.videoId}`}
        playing
        controls
        loop={false}
      />
    </div>
  );
}

export default VideoTrailer;
