# Github Analyzer

Search your Github username and get interesting results about your repositories and projects.

I used React and React Hook for this project.

This project is a practice for [React Tutorial and Projects Course](https://www.udemy.com/course/react-tutorial-and-projects-course/).

Check out the final result [here](https://github-analyzer-react.netlify.app/) (you should probably use a VPN).


## Gihthub API

I used [Github API](https://docs.github.com/en/rest) to get data.
- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/USER_NAME)
- [Repos](https://api.github.com/users/USER_NAME/repos?per_page=100)
- [Followers](https://api.github.com/users/USER_NAME/followers)
- [Rate Limit](https://api.github.com/rate_limit)

 For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.
 

## Styled Components

Instead of putting all CSS in a single CSS file, I used styled-components which is an awesome library to style components within them.
[Styled-Components - Main Docs](https://styled-components.com/)


## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)


## React Router Dom

React-Router-Dom is also involved in this project to route between pages.
- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)


## Fusion Charts

I used FusionChart library which is one of the best Chart library and it's really easy to work with.
- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

I used Auth0 to handle the identity and login/logout process.
- [Auth0 - Main Docs](https://auth0.com/)
- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

## Deployment

[Netlify](https://www.netlify.com/)

## TODO

- [X] Get a follower data by clicking on follower panel.
- [X] Fix input width on small devices

