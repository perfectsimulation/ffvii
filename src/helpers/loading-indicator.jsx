import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import LoadingIcon from '../icons/loading.png';

const LoadingTextContainer = styled.div`
  padding : 1rem;
  font-size: 1.2rem;
  color: #070766;
`;

const LoadingIconContainer = styled.img`
  align-self: center;
  height: 478px;
  width: 278px;
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