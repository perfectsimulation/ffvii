import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card } from './../commons/styles';

import ChapterCheckbox from './chapter-checkbox';

const ChecklistContainer = styled(Card)`
`;

const ChecklistListContainer = styled.div`
  max-width: 48rem;
  max-height: 11rem;
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  padding: 1rem 0;
`;

const ChecklistTitle = styled.p`
  padding: 1rem 0 0 0;
  text-align: left;
  font-size: 1.2rem;
`;

class ChapterChecklist extends Component {
  render() {
    return (
      <Fragment>
        <ChecklistContainer>
          <ChecklistTitle>Treasure</ChecklistTitle>
          <ChecklistListContainer>
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
            <ChapterCheckbox name={'test item'} />
          </ChecklistListContainer>
        </ChecklistContainer>
      </Fragment>
    );
  }
}

export default ChapterChecklist;