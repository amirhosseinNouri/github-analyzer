import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';

const Followers = () => {
  const {followers} = React.useContext(GithubContext);
  
  return <Wrapper>
    <div className="followers">
      {followers.map((item,index) => {
        const {avatar_url: img, html_url , login} = item;
        return <article key={index}>
          <img src={img} alt={login}/>
          <div>
            <h4>{login}</h4>
          <a href={html_url}>{html_url}</a>
          </div>
        </article>
      })}
    </div>
  </Wrapper>;
};

const Wrapper = styled.article`
  
`;
export default Followers;
