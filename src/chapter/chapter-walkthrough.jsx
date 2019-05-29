import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, CardTitle } from '../commons/styles';

const ChapterWalkthroughContainer = styled(Card)`
  text-align: left;
  font-size: 0.95rem;
`;


class Chapter extends Component {
  render() {
    return (
      <Fragment>
        <ChapterWalkthroughContainer>
          <CardTitle>Walkthrough</CardTitle>
          <pre>{this.props.content}</pre>
        </ChapterWalkthroughContainer>
      </Fragment>
    );
  }
}

export default Chapter;