import appleTv from "../../../assets/AppleTV.png";
import cMore from "../../../assets/CMore.png";
import disney from "../../../assets/Disney.png";
import hbo from "../../../assets/HBO.png";
import hulu from "../../../assets/Hulu.png";
import netflix from "../../../assets/Netflix.png";
import prime from "../../../assets/Prime.png";

export default function Matches({ title, year, imdbScore, id }) {

  function networksImage() {
    switch (id) {
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
    <div className="matchesWrapper">
      <span>
        <div>{title}</div>
        <div className="yearAndRate">
          {year}, IMDB {imdbScore} TV
        </div>
      </span>
      <span>
        {" "}
        <img src={networksImage()} alt="streamingService" />{" "}
      </span>
    </div>
  );
}
