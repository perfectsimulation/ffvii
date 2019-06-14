import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from './../commons/styles';
import ChapterNavBar from './../chapter/chapter-navigation-bar';

const LocationContainer = styled(PageContainer)`
`;

class LucreciasCave extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <LocationContainer>
          <PageTitle>
            Lucrecia's Cave
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default LucreciasCave;