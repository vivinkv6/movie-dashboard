
import ReactPlayer from "react-player";
import {YouTubeEmbed} from '@next/third-parties/google'

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
      <YouTubeEmbed videoid={params.videoId} width={500} height={500}  key={params.videoId}/>
    </div>
  );
}

export default VideoTrailer;
