import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Pointer from './../icons/point.png';
import Book from './../icons/table-of-contents-icon.png';

const ChapterNavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.25rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
  background: #070744;
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

class ChapterNavBar extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBarContainer>
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
        </ChapterNavBarContainer>
      </Fragment>
    );
  };
}

export default ChapterNavBar;