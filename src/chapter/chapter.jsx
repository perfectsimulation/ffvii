import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ChapterContainer = styled.div`
  padding: 1rem 3.5rem;
  padding-bottom: 3.5rem;
  text-align: left;
`;

class Chapter extends Component {
  render() {
    return (
      <Fragment>
        <ChapterContainer>
          <pre>{this.props.content}</pre>
        </ChapterContainer>
      </Fragment>
    );
  }
}

export default Chapter;