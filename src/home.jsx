import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import LoadingIndicator from './helpers/loading-indicator';

import NavBar from './navigation-bar';
import ChapterNavBar from './chapter/chapter-navigation-bar';
import Chapter from './chapter/chapter';
import ChapterChecklist from './chapter/chapter-checklist';

const HomeContainer = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ghostwhite;
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

const ChapterTitle = styled.p`
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
        <NavBar />
        <HomeContainer>
          {this.state.isLoading && (
            <LoadingIndicator />
          )}
          <HomeContent isLoading={this.state.isLoading}>
            <ChapterNavBar
              chapterIndex={this.state.chapterIndex}
              goToPreviousChapter={this.goToPreviousChapter}
              goToNextChapter={this.goToNextChapter}
            />
            <ChapterTitle>
              {this.state.chapterIndex} - {this.state.chapterTitle}
            </ChapterTitle>
            <ChapterChecklist
              index={this.state.chapterIndex}
              list={this.state.chapterTreasure}
            />
            <Chapter content={this.state.chapterContent}/>
          </HomeContent>
        </HomeContainer>
      </Fragment>
    );
  };
}

export default Home;