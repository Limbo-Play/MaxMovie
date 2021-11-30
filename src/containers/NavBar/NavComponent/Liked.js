import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import OurMatchesBtn from "../../../components/MatchesSection/OurMatchesBtn";
import { getLikedMovies } from "../../../redux/actions/likeAndDislikeAction";
import Matches from "./Matches";
import "./styles.scss"

export default function Liked() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { myLikedMovies } = useSelector(({ likedMoviesReducer }) => ({
    myLikedMovies: likedMoviesReducer.likedMovies,
  }));


  useEffect(() => {
    ref.current.addEventListener("scroll", (e) => {
      const scrollB =
        ref.current.scrollHeight -
        ref.current.scrollTop -
        ref.current.clientHeight;
      console.log(scrollB <= 80);
      if (scrollB <= 80) {
        dispatch(getLikedMovies(true));
      }
    });
  }, [dispatch]);

  return (
    <div className="likedMoviePosition" ref={ref}>
      <OurMatchesBtn/>
      {myLikedMovies.length > 0
        ? myLikedMovies.map((el, index) => (
            <Matches
              key={index}
              title={el.title}
              year={el.year}
              imdbScore={el.imdbScore}
              id={el.networkIds[0]}
            />
          ))
        : null}
    </div>
  );
}
