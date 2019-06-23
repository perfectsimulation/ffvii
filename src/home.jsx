import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Link } from './commons/styles';

import HomeBackgroundImage from './images/landing-background.jpg';
import HomeCursorImage from './images/cursor.png';

const HomeBackground = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 55rem;
`;
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: black;
`;

const HomeOptionCursor = styled.img`
  display: none;
  padding-right: 0.3rem;
  height: 2.2rem;

  ${props => props.showCursor && `
    display: block;
    position: absolute;
    right: 8.75rem;
  `}
`;

const HomeOption = styled(Link)`
  font-family: monospace;
  font-size: 2rem;
  color: ghostwhite;
  cursor: pointer;
`;

const HomeOptionContainer = styled.div`
  display: flex;
`;

const HomeOptionsContainer = styled.div`
  position: absolute;
  top: 300px;
  right: 300px;
  display: flex;
  flex-flow: column nowrap;
  z-index: 1;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      showNewGameCursor: false,
      showContinueCursor: false,
    };
  };

  toggleNewGameCursor = () => {
    this.setState((prevState) => ({
      showNewGameCursor: !prevState.showNewGameCursor,
    }));
  };
  toggleContinueCursor = () => {
    this.setState((prevState) => ({
      showContinueCursor: !prevState.showContinueCursor,
    }));
  };

  render() {
    return (
      <Fragment>
        <HomeContainer>
          <HomeOptionsContainer>
            <HomeOptionContainer>
              <HomeOptionCursor src={HomeCursorImage} alt={'Cursor'}
                showCursor={this.state.showNewGameCursor}
              />
              <HomeOption
                to={'/guide'}
                onMouseOver={this.toggleNewGameCursor}
                onMouseOut={this.toggleNewGameCursor}
              >
                NEW GAME
              </HomeOption>
            </HomeOptionContainer>
            <HomeOptionContainer>
              <HomeOptionCursor src={HomeCursorImage} alt={'Cursor'}
                showCursor={this.state.showContinueCursor}
              />
              <HomeOption
                to={'/guide'}
                onMouseOver={this.toggleContinueCursor}
                onMouseOut={this.toggleContinueCursor}
              >
                Continue?
              </HomeOption>
            </HomeOptionContainer>
          </HomeOptionsContainer>
          <HomeBackground src={HomeBackgroundImage} alt={'Home'} />
        </HomeContainer>
      </Fragment>
    );
  };
};

export default Home;