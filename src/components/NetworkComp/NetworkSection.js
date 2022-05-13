import appleTv from "../../assets/AppleTV.png";
import cMore from "../../assets/CMore.png";
import disney from "../../assets/Disney.png";
import hbo from "../../assets/HBO.png";
import hulu from "../../assets/Hulu.png";
import netflix from "../../assets/Netflix.png";
import prime from "../../assets/Prime.png";
import "./styles.scss";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export default function NetworkSection({
  canTurnOff,
  name,
  type,
  isActive,
  haveNext,
  id,
  handleChangeLocalNetworks,
}) {
  const { t } = useTranslation();
  function networkImage() {
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
    <>
      <div className="networksSection">
        {id ? <img src={networkImage()} alt={name} /> : <span>{type}</span>}
        <div>
          <div>{!isActive ? t("inactive") : t("active")}</div>
          <ToggleBtn
            disabled={isActive && !canTurnOff}
            toggleButton={handleChangeLocalNetworks}
            isActive={isActive}
          />{" "}
        </div>
      </div>
      {haveNext && <hr />}
    </>
  );
}

NetworkSection.propTypes = {
  name: PropTypes.string,
  btnState: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  isActive: PropTypes.bool,
  haveNext: PropTypes.bool,
  id: PropTypes.number,
  func: PropTypes.func,
};
