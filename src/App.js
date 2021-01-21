import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
