import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Link } from './../commons/styles';
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

    ${Link} {
      display: inline-block;
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
          <MenuLink href='/'>Guide</MenuLink>
          <MenuLink href='/'>Guide</MenuLink>
          <MenuLink href='/'>Guide</MenuLink>
          <MenuLink href='/'>Guide</MenuLink>
        </SideBarContainer>
      </Fragment>
    );
  };
}

export default SideBar;