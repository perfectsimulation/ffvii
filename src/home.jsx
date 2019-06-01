import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, PageContainer } from './commons/styles';
import LoadingIndicator from './helpers/loading-indicator';

import ChapterNavBar from './chapter/chapter-navigation-bar';
import ChapterWalkthrough from './chapter/chapter-walkthrough';
import ChapterChecklist from './chapter/chapter-checklist';

const HomeContainer = styled(PageContainer)`
`;

const HomeContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 55rem;
  width: 55rem;
  color: #070766;
  line-height: 1.1rem;
  background: #070766;
  background: ghostwhite;

  ${props => props.isLoading && `
    display: none;
  `}
`;

const ChapterTitle = styled(Card)`
  padding: 0.6rem 1rem;
  text-align: center;
  width: auto;
  font-size: 1.2rem;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      chapterContent: [],
      chapterIndex: 0,
      chapterTitle: '0',
      chapterTreasure: [],
      data: [],
      isLoading: true,
    };
  };

  componentDidUpdate(prevProps) {
    // typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.setState({
        chapterContent: this.props.data[this.state.chapterIndex].chapterContent,
        chapterTitle: this.props.data[this.state.chapterIndex].chapterTitle,
        chapterTreasure: this.props.data[this.state.chapterIndex].chapterTreasure,
        data: this.props.data,
        isLoading: false,
      });
    };
  };

  refreshGuide = (direction) => {
    const newIndex = this.state.chapterIndex + direction;
    this.setState((prevState) => ({
      chapterContent: this.props.data[newIndex].chapterContent,
      chapterIndex: prevState.chapterIndex + direction,
      chapterTitle: this.props.data[newIndex].chapterTitle,
      chapterTreasure: this.props.data[newIndex].chapterTreasure,
      data: this.props.data,
    }));
  };

  goToPreviousChapter = () => {
    if (this.state.chapterIndex === 0) {
      return;
    }
    this.refreshGuide(-1);
  };

  goToNextChapter = () => {
    if (this.state.chapterIndex === 42) {
      return;
    }
    this.refreshGuide(1);
  };

  render() {
    return (
      <Fragment>
        <ChapterNavBar
          goToPreviousChapter={this.goToPreviousChapter}
          goToNextChapter={this.goToNextChapter}
        />
        <HomeContainer>
          {this.state.isLoading && (
            <LoadingIndicator />
          )}
          <HomeContent isLoading={this.state.isLoading}>
            <ChapterTitle>
              {this.state.chapterIndex} - {this.state.chapterTitle}
            </ChapterTitle>
            <ChapterChecklist
              index={this.state.chapterIndex}
              list={this.state.chapterTreasure}
            />
            <ChapterWalkthrough content={this.state.chapterContent}/>
          </HomeContent>
        </HomeContainer>
      </Fragment>
    );
  };
}

export default Home;