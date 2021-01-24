import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  const languages = repos.reduce((total, current) => {
    const { language, stargazers_count } = current;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      // total[language] = {
      //   ...total[language],
      //   value: total[language].value + 1,
      // };
      total[language].value++;
      total[language].stars = total[language].stars + stargazers_count;
    }

    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);



  // Most Stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);


  // STEP 2 - Chart Data
  const chartData = [
    {
      label: "HTML",
      value: "13",
    },
    {
      label: "Css",
      value: "23",
    },
    {
      label: "JavaScript",
      value: "80",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed}></Pie3D>
        <Column3D data={chartData}></Column3D>
        <Doughnut2D data={mostPopular}></Doughnut2D>
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
