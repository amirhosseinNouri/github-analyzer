import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Dashboard}></PrivateRoute>
          <Route path="/login" exact component={Login}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
