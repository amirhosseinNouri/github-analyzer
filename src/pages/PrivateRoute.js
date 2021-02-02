import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const [isUser] = React.useState(isAuthenticated && user)
  

  if (isUser) {
    return <Route {...rest}>{children}</Route>;
  }
  return <Redirect to="/login"></Redirect>;
};
export default PrivateRoute;
