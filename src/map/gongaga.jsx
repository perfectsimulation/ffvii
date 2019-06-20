import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from '../commons/styles';
import SideBar from '../commons/sidebar';

const LocationContainer = styled(PageContainer)`
`;

class Gongaga extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <LocationContainer>
          <PageTitle>
            Gongaga
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default Gongaga;