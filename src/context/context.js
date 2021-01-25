import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // States
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  //request loading
  const [requests, setRequests] = useState(0);
  const [loading, setIsLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, message: "" });

  const searchGithubUsers = async (user) => {

    toggleError();
    setIsLoading(true);
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((error) => console.log(error));
    if (response) {
      setGithubUser(response.data);
    } else {
      toggleError(true, "There is no user with that usename");
    }
    setIsLoading(false);
  };

  //check rate
  const checkRequest = () => {
    axios
      .get(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you have exeeded your hourly rate limit!");
        }
      })
      .catch((error) => console.log(error));
  };
  // Error
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };
  useEffect(checkRequest, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
