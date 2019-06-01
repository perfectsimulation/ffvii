import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import SideBar from './sidebar';

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  background: #070744;
`;

export function navigationBar (SubComponent) {
  return class NavigationBar extends Component {
    render() {
      return (
        <Fragment>
          <NavBarContainer>
            <SideBar />
            <SubComponent
              goToPreviousChapter={this.props.goToPreviousChapter}
              goToNextChapter={this.props.goToNextChapter}
            />
          </NavBarContainer>
        </Fragment>
      );
    };
  }
}
