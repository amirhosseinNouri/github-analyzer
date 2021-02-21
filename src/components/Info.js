import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon"></GoRepo>,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon"></FiUsers>,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon"></FiUserPlus>,
      label: "Following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon"></GoGist>,
      label: "Gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  max-width: 1140;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem 2rem;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .item {
    border-radius: (--radius);
    padding: 1rem 2rem;
    background-color: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    transition: var(--transition);
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }

    &:hover {
      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.2);
    }
  }
  .icon {
    font-size: 1.5rem;
  }
  p {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .green {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default UserInfo;
