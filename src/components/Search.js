import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {
  const [user,setUser] = React.useState('')
  // get things from contexct

  const handleSubmit = event =>{
    event.preventDefault()
    if(user){
      setUser('')
    }
  }
  return <section className="section">
    <Wrapper className="section-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <MdSearch></MdSearch>
          <input type="text" placeholder="Enter Github User" value={user} onChange={(event) => setUser(event.target.value)} />
          <button type="submit">Search</button>
        </div>
      </form>
      <h3>Requests : 60 / 60</h3>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`

`;

export default Search;
