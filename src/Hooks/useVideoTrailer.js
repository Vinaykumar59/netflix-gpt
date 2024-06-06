import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useVideoTrailer = (id) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
        const movieTrailer = await data.json();
        const trailerVideo = movieTrailer.results.filter( video => video.type === "Trailer");
        const video = trailerVideo.length > 0 ? trailerVideo[0] : movieTrailer[0];
        dispatch(addMovieTrailer(video));
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

}

export default useVideoTrailer;