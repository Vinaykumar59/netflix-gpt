import { useSelector } from "react-redux";
import useVideoTrailer from "../Hooks/useVideoTrailer";
const VideoTrailer = ({ id }) => {
  useVideoTrailer(id);
  const key = useSelector((store) => store.movies.movieTrailer?.key);
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay" // Add this to allow autoplay
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
