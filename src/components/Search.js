import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests } = React.useContext(GithubContext);
  // get things from contexct

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      setUser("");
    }
  };
  return (
    <section className="section">
      <Wrapper className="section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch></MdSearch>
            <input
              type="text"
              placeholder="Enter Github User"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            {requests > 0 && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>Requests : {requests} / 60</h3>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
      border: 1px solid red;
    }
  }
  .form-control {
    background-color: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;

    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-color: transparent;
      border-radius: 5px;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background-color: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        color: var(--clr-primary-1);
        background-color: var(--clr-primary-8);
      }
    }

    svg {
      color: var(--clr-grey-5);
    }

    input,
    button,
    svg {
      font-size: 1.3rem;
    }

    @media (min-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }

  h3 {
    margin-bottom: 0;
    color: var(--clr-grey-5);
    font-weight: 400;
  }
`;

export default Search;
