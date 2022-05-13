import NetworkWrapper from "../../../components/NetworkComp/NetworkWrapper";
import NetworkTitle from "../../../components/NetworkComp/NetworksTitle";
import NetworkSection from "../../../components/NetworkComp/NetworkSection";
import {
  getNetworks,
  updateNetworkState,
} from "../../../redux/actions/getNetworksAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TypeSection from "../../../components/NetworkComp/TypeSection";
import { useTranslation } from "react-i18next";
import { getGenres } from "../../../redux/actions/genresAction";
import Genres from "../../Genres/Genres";

export default function Networks() {
  const dispatch = useDispatch();

  const networks = useSelector((store) => store.networksReducer.networks);
  const [networksLocalState, setNetworksLocalState] = useState(networks);
  const typeOfMovies = [{id:1 ,title: "Series", isActive: true},{id:2, title: "Movies", isActive: false}]
  const [typeOfMovie, setTypeOfMovie] = useState(typeOfMovies);
  const { t } = useTranslation();
  
  useEffect(() => {
    dispatch(getNetworks());
    setNetworksLocalState(networks);
    dispatch(getGenres());
  }, [dispatch]);
  useEffect(() => {
    console.log(typeOfMovie)
  })
  // useEffect(() => {
  //   chngLng();
  // }, []);

  // const chngLng = async () => { // change language to UA
  //  setTimeout(() => {
  //   i18n.changeLanguage("ua");
  //   }, 3000);
  //  };
  const changeLocalNetworks = (idx) => {
    const localNetwork = networksLocalState;
    dispatch(updateNetworkState({ localNetwork: localNetwork[idx] }));
    console.log(localNetwork);
    setNetworksLocalState((prev) =>
      prev.map((el, index) => {
        return {
          ...el,
          isActive: idx === index ? !el.isActive : el.isActive,
        };
      })
    );
  };

  const handleChangeMovieType = (idx) => {
    setTypeOfMovie((prev) =>
      prev.map((el, index) => {
        return {
          ...el,
          isActive: idx === index ? !el.isActive : el.isActive,
        };
      })
    );
  };




  return (
    <div className="filtersPosition">
      <NetworkWrapper>
        <NetworkTitle title={t("networks")} />
        {networksLocalState
          ? networksLocalState.map((el, idx, arr) => (
              <NetworkSection
                key={el.id}
                id={el.id}
                canTurnOff={
                  arr.reduce((acc, el) => (el.isActive ? acc + 1 : acc), 0) > 1
                }
                name={el.providerName}
                isActive={el.isActive}
                haveNext={networks.length - 1 !== idx}
                handleChangeLocalNetworks={() => changeLocalNetworks(idx)}
              />
            ))
          : null}
      </NetworkWrapper>

      <NetworkWrapper>
        <NetworkTitle title={t("type")} />
        {typeOfMovie.map((el, idx, array) => 
          <TypeSection key={el.id}
            canTurnOff={
                  array.reduce((acc, el) => (el.isActive ? acc + 1 : acc), 0) > 1
                }
            title={el.title} isActive={el.isActive}
            toggleButton={() => handleChangeMovieType(idx)}
            haveNext={typeOfMovies.length - 1} />
      )}
      </NetworkWrapper>

      <NetworkWrapper>
        <NetworkTitle title={t("region")} />
      </NetworkWrapper>

      <NetworkWrapper>
        <NetworkTitle title={t("categories")} />
        <Genres />
      </NetworkWrapper>
    </div>
  );
}
