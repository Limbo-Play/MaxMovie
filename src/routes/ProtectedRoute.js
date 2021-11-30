import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export function PrivateRoute({ children, ...rest }) {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function PublicRoute({ children, ...rest }) {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard/discover",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
