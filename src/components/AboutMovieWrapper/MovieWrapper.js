import "./styles.scss";
import appleTv from "../../assets/AppleTV.png";
import cMore from "../../assets/CMore.png";
import disney from "../../assets/Disney.png";
import hbo from "../../assets/HBO.png";
import hulu from "../../assets/Hulu.png";
import netflix from "../../assets/Netflix.png";
import prime from "../../assets/Prime.png";
import Button from "../Buttons/Button";
import MovieLabel from "./MovieLabel";
export default function MovieWrapper({
  title,
  networkIds,
  image,
  trailer,
  type,
  imdb,
}) {
  function handleWatchTrailer() {
    if (trailer) {
      window.open(trailer, "_blank");
    }
  }

  function networkImage() {
    switch (networkIds) {
      case 1:
        return netflix;
      case 2:
        return appleTv;

      case 3:
        return hbo;

      case 4:
        return hulu;

      case 5:
        return prime;

      case 6:
        return cMore;

      case 7:
        return disney;
      default:
        return null;
    }
  }
  return (
    <div className="movieWrapper">
      <img className="posterForDescription" src={image} alt={title} />
      <br />
      <img src={networkImage()} alt={"Networks"} />
      <div className="labelPosition">
        <MovieLabel type={type} />
        <MovieLabel type={"imdb"} imdb={imdb} />
      </div>
      <Button onClick={handleWatchTrailer} value={"Watch Trailer"} />
    </div>
  );
}
