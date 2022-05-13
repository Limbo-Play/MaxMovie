import "../App.scss";
import AboutMaxMovie from "../containers/MainPage/AboutMaxMovie";
import SignIn from "../containers/SignIn/SignIn";
import SignUp from "../containers/SignUp/SignUp";
import VerifyContainer from "../containers/VerifyPage/VerifyContainer";
import RecoverPage from "../containers/RecoverPassword/RecoverPage";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppNavigationPage from "../containers/NavBar/AppNavigation";
import { useEffect } from "react";
import { refreshSession } from "../redux/actions/authActions";
import { PrivateRoute, PublicRoute } from "./ProtectedRoute";
import InputEmailForRecover from "../containers/RecoverPassword/InputMailForRecover";
import GoBackBtn from "../components/Buttons/GoBackBtn";

function LoginSignIn() {
  const dispatch = useDispatch();
  const registration = useSelector((store) => store.signUpReducer.registration);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const username = useSelector((store) => store.recoverReducer.username);
  const recover = useSelector((store) => store.recoverReducer.recover);
  console.log(recover);

  useEffect(() => {
    dispatch(refreshSession());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/">
          <AboutMaxMovie />
        </PublicRoute>
        <PublicRoute path="/login">
          <GoBackBtn />
          {isAuth ? <Redirect to="/dashboard/discover" /> : <SignIn />}
        </PublicRoute>
        <PublicRoute path="/registration">
          <GoBackBtn />
          {registration ? <Redirect to="/verify" /> : <SignUp />}
        </PublicRoute>
        <PublicRoute path="/verify">
          <GoBackBtn />
          <VerifyContainer />
        </PublicRoute>
        <PrivateRoute path="/dashboard">
          <AppNavigationPage />
        </PrivateRoute>
        <PublicRoute path="/recover">
          <GoBackBtn />
          {username ? <RecoverPage /> : <InputEmailForRecover />}
        </PublicRoute>
        <PublicRoute path="/confirmation">
          <GoBackBtn />
          <RecoverPage />
        </PublicRoute>
      </Switch>
    </Router>
  );
}

export default LoginSignIn;
