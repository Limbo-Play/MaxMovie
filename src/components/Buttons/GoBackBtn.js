import { useHistory } from "react-router";
import backBtn from "../../assets/BackBtn.png";
import "./goBackBtn.scss";

export default function GoBackBtn() {
  const history = useHistory();

  return history.length > 1 ? (
    <img
      className="goBackBtn"
      onClick={history.goBack}
      src={backBtn}
      alt="back"
    />
  ) : null;
}
