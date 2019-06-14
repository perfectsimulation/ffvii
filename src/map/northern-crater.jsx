import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from './../commons/styles';
import ChapterNavBar from './../chapter/chapter-navigation-bar';

const LocationContainer = styled(PageContainer)`
`;

class NorthernCrater extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <LocationContainer>
          <PageTitle>
            Northern Crater
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default NorthernCrater;