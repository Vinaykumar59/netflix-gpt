import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {addNowPlayingMovies} from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();  
    const getNowPlayingMovies = async () => {
      const movieData = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const json = await movieData.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {
      getNowPlayingMovies()
    }, [])
  
  
}

export default useNowPlayingMovies