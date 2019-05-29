import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import HomeIcon from './../icons/home.png';

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
  background: #070744;
`;

const HomeIconContainer = styled.img`
  position: fixed;
  top: 0.4rem;
  left: 1rem;
  height: 2.2rem;
  cursor: pointer;
`;

export function navigationBar (SubComponent) {
  return class NavigationBar extends Component {
    render() {
      return (
        <Fragment>
          <NavBarContainer>
            <HomeIconContainer src={HomeIcon} alt="Home" />
            <SubComponent />
          </NavBarContainer>
        </Fragment>
      );
    };
  }
}
