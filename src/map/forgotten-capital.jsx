import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { PageContainer, PageTitle } from '../commons/styles';
import SideBar from '../commons/sidebar';

const LocationContainer = styled(PageContainer)`
`;

class ForgottenCapital extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <LocationContainer>
          <PageTitle>
            Forgotten Capital
          </PageTitle>
        </LocationContainer>
      </Fragment>
    );
  };
}

export default ForgottenCapital;