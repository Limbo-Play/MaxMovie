import discover from "../../assets/Discover.png";
import network from "../../assets/NetworkLogo.png";
import matches from "../../assets/Matches.png";
import person from "../../assets/PersonLogo.png";
import logoutLogo from "../../assets/LogOutLogo.png";
import "./styles.scss";
import { signOut } from "../../redux/actions/signUpActions";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNetworks } from "../../redux/actions/getNetworksAction";
import { useEffect } from "react";
import { getMovies } from "../../redux/actions/getMoviesAction";
import Networks from "./NavComponent/Networks";
import DiscoverCarousel from "./NavComponent/DiscoverCarousel";
import Liked from "./NavComponent/Liked";
import AboutMovie from "./NavComponent/AboutMovies/AboutMovie";
import GoBackAbouMovie from "../../components/Buttons/GoBackAboutMovie";
import { getLikedMovies } from "../../redux/actions/likeAndDislikeAction";

export default function AppNavigationPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getNetworks());
    dispatch(getLikedMovies());
  }, []);

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <div className="appPosition">
      <aside className="navPosition">
        {/*<nav>
          <span className="maxM">MaxM</span>
          <ul>
            <li>
              <NavLink
                className="selectedLink"
                activeClassName="selectedLink-active"
                exact
                to="/dashboard/discover"
              >
                {" "}
                <img src={discover} alt="Discover" />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="selectedLink"
                activeClassName="selectedLink-active"
                exact
                to="/dashboard/networks"
              >
                {" "}
                <img src={network} alt="Network" />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="selectedLink"
                activeClassName="selectedLink-active"
                exact
                to="/dashboard/matches"
              >
                {" "}
                <img src={matches} alt="Matches" />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="selectedLink"
                activeClassName="selectedLink-active"
                exact
                to="dashboard"
              >
                {" "}
                <img src={person} alt="Person" />{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <img
            onClick={handleLogOut}
            className="logoutPos"
            src={logoutLogo}
            alt="LogOut"
          />
        </Link>*/}
      </aside>

      <div className="mainAppBackground">
        coming soon...
        {/*<Switch>
          <Route exact path="/dashboard/discover">
            <DiscoverCarousel />
          </Route>
          <Route exact path="/dashboard/discover/:id">
            <GoBackAbouMovie />
            <AboutMovie />
          </Route>
          <Route exact path="/dashboard/networks">
            <Networks />
          </Route>
          <Route exact path="/dashboard/matches">
            <Liked />
          </Route>
        </Switch>*/}
      </div>
    </div>
  );
}
