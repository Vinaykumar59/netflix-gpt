import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const VideoMainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(!movies) return;
    const mainMovie = movies[0]
    const {original_title, overview, id} = mainMovie
    return(
        <div>
            <VideoTitle  title ={original_title} description={overview} /> 
            <VideoTrailer id= {id} />
        </div>
    )
}

export default VideoMainContainer;