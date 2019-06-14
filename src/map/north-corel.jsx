import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from './../commons/styles';
import ChapterNavBar from './../chapter/chapter-navigation-bar';

const LocationContainer = styled(PageContainer)`
`;

class NorthCorel extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <LocationContainer>
          <PageTitle>
            North Corel
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default NorthCorel;