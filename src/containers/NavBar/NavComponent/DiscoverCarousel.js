import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Discover from "./Discover";
import { useSelector } from "react-redux";
import { useRef } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
import dislike from "../../../assets/dislike.png";
import rewind from "../../../assets/rewind.png";
import like from "../../../assets/like.png";
import {
  likeAMovie,
  disLikeAMovie,
} from "../../../redux/actions/likeAndDislikeAction";

export default function DiscoverCarousel() {
  const dispatch = useDispatch();
  const sliderRef = useRef();
  const { movies } = useSelector(({ moviesReducer }) => ({
    movies: moviesReducer.movies,
  }));

  function slideToId(sliderRef) {
    return sliderRef.current.props.children[
      sliderRef.current.innerSlider.state.currentSlide
    ].props.id;
  }

  function handleLikeMovie() {
    dispatch(likeAMovie(slideToId(sliderRef)));
    sliderRef.current.slickNext();
  }
  function handleDisLikeMovie() {
    dispatch(disLikeAMovie(slideToId(sliderRef)));
    sliderRef.current.slickNext();
  }

  function gotoPrev() {
    sliderRef.current.slickPrev();
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    fade: false,
    arrows: false,
    swipe: false,
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {movies.length > 0
          ? movies.map((el, index) => (
              <Discover
                id={el.id}
                key={index}
                title={el.title}
                year={el.year}
                image={el.image}
                networkId={el.networkIds[0]}
                aboutMovie={el.description}
                genres={el.genres.join(", ")}
                watchLink={el.watchLink}
                creator={el.creator}
                actors={el.actors.slice(0, 4).join(", ")}
              />
            ))
          : null}
      </Slider>
      <footer className="likeRewind">
        <img onClick={handleDisLikeMovie} src={dislike} alt="dislike" />
        <img onClick={gotoPrev} src={rewind} alt="rewind" />
        <img onClick={handleLikeMovie} src={like} alt="like" />
      </footer>
    </>
  );
}
