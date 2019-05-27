import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Pointer from './point.png';
import Book from './table-of-contents-icon.png';

const ChapterNavBarContainer = styled.div`
  padding: 0.6rem;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
`;

const BackPointerContainer = styled.img`
  transform: rotate(90deg) scaleY(-1);
  height: 5rem;
  width: auto;
  cursor: pointer;
`;

const TableOfContentsIconContainer = styled.img`
  padding: 0 1rem;
  height: 5rem;
  width: auto;
  cursor: pointer;
`;

const ForwardPointerContainer = styled.img`
  transform: rotate(90deg);
  height: 5rem;
  width: auto;
  cursor: pointer;
`;

class ChapterNavBar extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBarContainer>
          <BackPointerContainer src={Pointer} alt="Previous chapter" onClick={this.props.goToPreviousChapter}/>
          <TableOfContentsIconContainer src={Book} alt="Table of contents"/>
          <ForwardPointerContainer src={Pointer} alt="Next chapter" onClick={this.props.goToNextChapter}/>
        </ChapterNavBarContainer>
      </Fragment>
    );
  }
}

export default ChapterNavBar;