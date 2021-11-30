import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actionIcon,
  adventureIcon,
  animeIcon,
  awardIcon,
  biographyIcon,
  classicIcon,
  comicsIcon,
  crimeIcon,
  defaultMovieIcon,
  documentaryIcon,
  dramaIcon,
  familyIcon,
  fantasyIcon,
  foodIcon,
  historyIcon,
  holidayIcon,
  hororIcon,
  internationalIcon,
  musicalsIcon,
  realityTVIcon,
  romanceIcon,
  sciFiIcon,
} from "../../assets/iconsForCategories";
import CategoriesSpan from "../../components/NetworkComp/CategoriesSpan";
import "./styles.scss";
import { changeGenres } from "../../redux/actions/genresAction"

export default function Genres() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.moviesReducer.genres);
  const [localGenres, setLocalGenres] = useState(genres);

  function getGenresIcons(name) {
    switch (name) {
      case "Award":
        return awardIcon();
      case "Adventure":
        return adventureIcon();
      case "Action":
        return actionIcon();
      case "Anime":
        return animeIcon();
      // case 'Animation':

      case "Biography":
        return biographyIcon();
      case "Classic":
        return classicIcon();
      case "Comic":
        return comicsIcon();
      case "Crime":
        return crimeIcon();
      // case 'Comedies':

      case "Documentary":
        return documentaryIcon();
      case "Drama":
        return dramaIcon();
      case "Family":
        return familyIcon();
      case "Food":
        return foodIcon();
      case "Fantasy":
        return fantasyIcon();
      case "Holiday":
        return holidayIcon();
      case "Horror":
        return hororIcon();
      case "History":
        return historyIcon();
      // case 'Independent':

      case "International":
        return internationalIcon();
      case "Music":
        return musicalsIcon();
      case "Mystery":
        return fantasyIcon();
      case "Reality-TV":
        return realityTVIcon();
      case "Romance":
        return romanceIcon();
      // case 'Sport':
      case "Sci-Fi":
        return sciFiIcon();
      //   case 'Teen':
      //   case 'Thriller':
      case "War":
        return actionIcon();

      default:
        return defaultMovieIcon();
    }
  }

  const handleChangeLocalGenres = (idx) => {
      dispatch(changeGenres({ localGenres: localGenres[idx] }));

      setLocalGenres((prev) =>
        prev.map((el, index) => {
          return {
            ...el,
            active: idx === index ? !el.active : el.active,
          };
        })
      );
  }
  
  return (
    <div className="genresPosition">
      {localGenres
        ? localGenres.map((el, idx) => (
          <CategoriesSpan
            key={idx}
            isActive={el.active}
            name={el.name}
            handleChangeGenres={() => handleChangeLocalGenres(idx)}>     
              {getGenresIcons(el.name)}
            </CategoriesSpan>
          ))
        : null}
    </div>
  );
}
