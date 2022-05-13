import appleTv from "../../../assets/AppleTV.png";
import cMore from "../../../assets/CMore.png";
import disney from "../../../assets/Disney.png";
import hbo from "../../../assets/HBO.png";
import hulu from "../../../assets/Hulu.png";
import netflix from "../../../assets/Netflix.png";
import prime from "../../../assets/Prime.png";
import "./styles.scss";
import PosterContainer from "../../../components/Poster/PosterContainer";

export default function Discover({
  image,
  year,
  networkId,
  title,
  id,
}) {
  function networkImage() {
    switch (networkId) {
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
    <div className="discoverPosition">
      <div className="posterPosition">
        <PosterContainer name={title} image={image} id={id} />
        <img className="streamingService" src={networkImage()} alt="network" />
        <span className="movieName">{title}</span>
        <span className="movieYear">{year}</span>
      </div>
      <div className="aboutMovie"></div>
    </div>
  );
}
