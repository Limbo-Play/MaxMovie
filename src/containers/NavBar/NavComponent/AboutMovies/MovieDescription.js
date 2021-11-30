import { useSelector } from "react-redux";
import AboutMovies from "./AboutMovie";

export default function MovieDescription() {
  const movies = useSelector((store) => store.moviesReducer.movies);
  return movies
    ? movies.map((el, index) => (
        <AboutMovies
          key={index}
          title={el.title}
          year={el.year}
          genres={el.genres.join(", ")}
          description={el.description}
          creator={el.creator}
          actors={el.actors.slice(0, 3).join(", ")}
          image={el.image}
          networkIds={el.networkIds[0]}
          trailer={el.trailer}
          type={el.type}
          imdb={el.imdbScore}
          seasons={el.seasons}
          // audioLanguages
          // seasons
        />
      ))
    : null;
}
