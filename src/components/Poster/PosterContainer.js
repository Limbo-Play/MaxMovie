import { NavLink } from "react-router-dom";
import infoLogo from "../../assets/infoLogo.png";
import "./posterContainer.scss";

export default function PosterContainer({ title, image, id }) {
  return (
    <div className="card">
      <NavLink to={`/dashboard/discover/${id}`}>
        <img className="front" src={image} alt={title} />
      </NavLink>
      <img className="infoLogo" src={infoLogo} alt={"info"} />
    </div>
  );
}
