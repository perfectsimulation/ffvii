import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import NavBar from './navigation-bar';
import ChapterNavBar from './chapter-navigation-bar';

const HomeContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #070766;
`;

const HomeContent = styled.div`
  max-width: 55rem;
  width: 55rem;
  background: ghostwhite;
`;

const ChapterTitle = styled.p`
  padding-top: 1rem;
  font-size: 1.2rem;
`;

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <HomeContainer>
          <HomeContent>
            <ChapterTitle>1 - The Reactor #1 Raid</ChapterTitle>
            <ChapterNavBar />
          </HomeContent>
        </HomeContainer>
      </Fragment>
    );
  }
}

export default Home;