import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import SideBar from '../commons/sidebar';

import Pointer from '../images/point.png';
import Book from '../images/table-of-contents-icon.png';

const ChapterNavigationContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const BackPointerContainer = styled.img`
  transform: rotate(90deg) scaleY(-1);
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

const TableOfContentsIconContainer = styled.img`
  padding: 0 1rem;
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

const ForwardPointerContainer = styled.img`
  transform: rotate(90deg);
  height: 3rem;
  width: auto;
  cursor: pointer;
`;

class ChapterNavigation extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <ChapterNavigationContainer>
          <BackPointerContainer
            src={Pointer}
            alt="Previous chapter"
            onClick={this.props.goToPreviousChapter}
          />
          <TableOfContentsIconContainer
            src={Book}
            alt="Table of contents"
          />
          <ForwardPointerContainer
            src={Pointer}
            alt="Next chapter"
            onClick={this.props.goToNextChapter}
          />
        </ChapterNavigationContainer>
      </Fragment>
    );
  };
}

export default ChapterNavigation;