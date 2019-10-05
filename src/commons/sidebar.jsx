import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from '../commons/styles';

import HomeIconImage from '../images/home.png';

const HomeLink = styled(Link)``;

const HomeIcon = styled.img`
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
`;

const SideBarLink = styled(Link)`
  display: none;
  padding: 1rem 0.1rem 0 0.1rem;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 6rem;
  height: 100vh;
  z-index: 2;
  background: #070744;
  color: ghostwhite;

  ${SideBarLink} {
    display: inline-block;
    font-family: "Lucida Console", Monaco, monospace;
    text-decoration: none;
    color: ghostwhite;
    text-align: left;
  }
`;

class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <SideBarContainer>
          <HomeLink to='/'>
            <HomeIcon src={HomeIconImage} alt="Home" />
          </HomeLink>
          <SideBarLink to='/guide'>Guide</SideBarLink>
          <SideBarLink to='/map'>Map</SideBarLink>
          <SideBarLink to='/enemy'>Enemies</SideBarLink>
        </SideBarContainer>
      </Fragment>
    );
  };
}

export default SideBar;