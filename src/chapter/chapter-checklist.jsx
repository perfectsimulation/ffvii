import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card } from './../commons/styles';

import ChapterCheckbox from './chapter-checkbox';

const ChecklistContainer = styled(Card)`
`;

const ChecklistListContainer = styled.div`
  max-width: 48rem;
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
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({
        list: this.props.list.split(', '),
      });
      console.log(this.props.list.split(', '));
    };
  };

  render() {
    return (
      <Fragment>
        <ChecklistContainer>
          <ChecklistTitle>Treasure</ChecklistTitle>
          <ChecklistListContainer>
            {this.state.list.map((item, key) =>
              <ChapterCheckbox key={key} name={item}/>
            )}
          </ChecklistListContainer>
        </ChecklistContainer>
      </Fragment>
    );
  }
}

export default ChapterChecklist;