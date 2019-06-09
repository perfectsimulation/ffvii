import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuIcon from './../icons/home.png';

const MenuIconContainer = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
`;

const MenuLink = styled(Link)`
  display: none;
  padding: 1rem 0.1rem 0 0.1rem;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 6rem;
  height: 3.2rem;
  background: #070744;
  color: ghostwhite;
  transition: all 0.7s;

  &:hover {
    height: 100vh;

    ${MenuLink} {
      display: inline-block;
      font-family: "Lucida Console", Monaco, monospace;
      text-decoration: none;
      color: ghostwhite;
    }
  }
`;

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  };

  openSideBar = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    return (
      <Fragment>
        <SideBarContainer>
          <MenuIconContainer src={MenuIcon} alt="Menu" onClick={this.openSideBar}/>
          <MenuLink to='/'>Guide</MenuLink>
          <MenuLink to='/map'>Map</MenuLink>
        </SideBarContainer>
      </Fragment>
    );
  };
}

export default SideBar;