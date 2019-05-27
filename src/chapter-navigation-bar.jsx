import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Pointer from './point.png';
import Book from './table-of-contents-icon.png';

const ChapterNavBarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;
`;

const BackPointerContainer = styled.img`
  padding: 0.7rem;
  transform: rotate(90deg) scaleY(-1);
  height: 5rem;
  width: 5rem;
`;

const TableOfContentsIconContainer = styled.img`
  padding: 0.6rem;
  height: 5rem;
  width: 5rem;
`;

const ForwardPointerContainer = styled.img`
  padding: 0.7rem;
  transform: rotate(90deg);
  height: 5rem;
  width: 5rem;
`;

class ChapterNavBar extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBarContainer>
          <BackPointerContainer src={Pointer} alt="Previous chapter"/>
          <TableOfContentsIconContainer src={Book} alt="Table of contents"/>
          <ForwardPointerContainer src={Pointer} alt="Next chapter"/>
        </ChapterNavBarContainer>
      </Fragment>
    );
  }
}

export default ChapterNavBar;