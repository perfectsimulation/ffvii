import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from './../commons/styles';
import ChapterNavBar from './../chapter/chapter-navigation-bar';

const LocationContainer = styled(PageContainer)`
`;

class ChocoboSage extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <LocationContainer>
          <PageTitle>
            Chocobo Sage
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default ChocoboSage;