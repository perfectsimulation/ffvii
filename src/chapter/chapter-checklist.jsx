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
  };

  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({
        list: this.props.list.split(', '),
      });
    };
    if (this.needsInitLocalStorage()) {
      // first time on this chapter, make a new localStorage for completion
      this.initLocalStorage();
    }
  };

  needsInitLocalStorage = () => {
    // all checklists have at least one item
    return !localStorage.getItem(`${this.props.index}-0`) && this.props.list.length !== 0;
  };

  initLocalStorage = () => {
    const items = this.props.list.split(', ');
    items.map((item, key) => {
      return localStorage.setItem(`${this.props.index}-${key}`, false);
    });
  };

  toggleLocalStorageStatus = (itemIndex, newStatus) => {
    localStorage.setItem(`${this.props.index}-${itemIndex}`, newStatus);
  };

  render() {
    return (
      <Fragment>
        <ChecklistContainer>
          <ChecklistTitle>Treasure</ChecklistTitle>
          <ChecklistListContainer>
            {this.state.list.map((item, key) =>
              <ChapterCheckbox
                id={key}
                index={this.props.index}
                key={`${this.props.index}-${key}`}
                name={item}
                persistChange={this.toggleLocalStorageStatus}
              />
            )}
          </ChecklistListContainer>
        </ChecklistContainer>
      </Fragment>
    );
  };
}

export default ChapterChecklist;