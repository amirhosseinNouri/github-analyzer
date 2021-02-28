import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev-6ol65p6j.us.auth0.com
// Bf8H4Wo1n1Ie98mKOuYDNEoGFo9BxLBx
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6ol65p6j.us.auth0.com"
      clientId="Bf8H4Wo1n1Ie98mKOuYDNEoGFo9BxLBx"
      redirectUri={window.location.origin}
      cacheLocation = 'localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

