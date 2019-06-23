import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, PageContainer } from './commons/styles';
import LoadingIndicator from './helpers/loading-indicator';

import ChapterNavigation from './chapter/chapter-navigation';
import ChapterWalkthrough from './chapter/chapter-walkthrough';
import ChapterChecklist from './chapter/chapter-checklist';

const HomeContainer = styled(PageContainer)`
  padding-top: 0;
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
      guide: [],
      isLoading: true,
    };
  };

  componentDidUpdate(prevProps) {
    // typical usage (don't forget to compare props):
    if (this.props.guide !== prevProps.guide) {
      this.setState({
        chapterContent: this.props.guide[this.state.chapterIndex].chapterContent,
        chapterTitle: this.props.guide[this.state.chapterIndex].chapterTitle,
        chapterTreasure: this.props.guide[this.state.chapterIndex].chapterTreasure,
        guide: this.props.guide,
        isLoading: false,
      });
    };
  };

  refreshGuide = (direction) => {
    const newIndex = this.state.chapterIndex + direction;
    this.setState((prevState) => ({
      chapterContent: this.props.guide[newIndex].chapterContent,
      chapterIndex: prevState.chapterIndex + direction,
      chapterTitle: this.props.guide[newIndex].chapterTitle,
      chapterTreasure: this.props.guide[newIndex].chapterTreasure,
      guide: this.props.guide,
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
        <ChapterNavigation
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