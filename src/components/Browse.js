import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import VideoMainContainer from "./VideoMainContainer"
import RecommendationsContainer from "./RecommendationsContainer"

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div >
      <Header />
      {/* {
        MainCotainer
          - video background
          - Video Tutle
        secondaryContainer
          -MoviesList * n
            - cards * n
      } */}
      <VideoMainContainer/>
      <RecommendationsContainer />
    </div>
  );
};

export default Browse;
