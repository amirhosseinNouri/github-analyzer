import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // States
  const [githubUser, setGithubUser] = React.useState(mockUser);
  const [repos, setRepos] = React.useState(mockRepos);
  const [followers, setFollowers] = React.useState(mockFollowers);

  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
