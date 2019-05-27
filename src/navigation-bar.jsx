import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  background: #070744;
`;

const NavBarLink = styled.a`
  font-family: "Lucida Console", Monaco, monospace;
  padding-right: 1rem;
  font-size: 1rem;
  color: ghostwhite;
`;

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBarLink href="/">Home</NavBarLink>
          <NavBarLink href="/">Home</NavBarLink>
          <NavBarLink href="/">Home</NavBarLink>
        </NavBarContainer>
      </Fragment>
    );
  }
}

export default NavBar;