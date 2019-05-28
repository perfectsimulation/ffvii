import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import LoadingIcon from './../icons/loading.png';

const LoadingTextContainer = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
`;

const LoadingIconContainer = styled.img`
`;

class LoadingIndicator extends Component {
  render() {
    return (
      <Fragment>
        <LoadingTextContainer>
          LOADING
        </LoadingTextContainer>
        <LoadingIconContainer src={LoadingIcon} />
      </Fragment>
    );
  }
}

export default LoadingIndicator;