import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background: #070744;
`;

const NavBarLink = styled.a`
  padding: 0.8rem;
  font-size: 1rem;
  color: ghostwhite;
  font-family: Arial, Helvetica, sans-serif;
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