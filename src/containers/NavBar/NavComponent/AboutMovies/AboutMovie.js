import "./aboutMovie.scss";
import DescriptionWrapper from "../../../../components/AboutMovieWrapper/DescriptionWrapper";
import MovieWrapper from "../../../../components/AboutMovieWrapper/MovieWrapper";
import { useParams } from "react-router";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function AboutMoviesWrapper() {
  const movies = useSelector((store) => store.moviesReducer.movies);
  let { id } = useParams();

  const movie = useMemo(() => movies.find((el) => el.id == id), [movies, id]);
 
  return (
    <div className="mainTitleAboutMovie">
      <MovieWrapper
        imdb={movie.imdbScore}
        type={movie.type}
        image={movie.image}
        title={movie.title}
        networkIds={movie.networkIds[0]}
        trailer={movie.trailer}
      />

      <div className="movieInfoWrapper">
        <p>{movie.title}</p>
        <span className="genresWrapper">{movie.genres.join(", ")}</span>
        <br />
        <span className="yearWrapper">{movie.year}</span>
        <br />
        <span className="descriptionWrapper">{movie.description}</span>
        <br />
        {movie.creator ? (
          <DescriptionWrapper
            descriptionName={"Creator"}
            description={movie.creator}
          />
        ) : (
          ""
        )}
        {movie.genres ? (
          <DescriptionWrapper
            descriptionName={"Genres"}
            description={movie.genres.join(", ")}
          />
        ) : (
          ""
        )}
        {movie.subtitles ? (
          <DescriptionWrapper
            descriptionName={"Subtitles"}
            description={movie.subtitles}
          />
        ) : (
          ""
        )}
        {movie.audioLanguages ? (
          <DescriptionWrapper
            descriptionName={"Audio languages"}
            description={movie.audioLanguages}
          />
        ) : (
          ""
        )}
        {movie.seasons ? (
          <DescriptionWrapper
            descriptionName={"Seasons & Episodes"}
            description={movie.season.join(", ")}
          />
        ) : (
          ""
        )}
        {movie.actors ? (
          <DescriptionWrapper
            descriptionName={"Actors"}
            description={movie.actors.join(", ")}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AboutMoviesWrapper;
