import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import LoadingIndicator from './helpers/loading-indicator';

import NavBar from './navigation-bar';
import ChapterNavBar from './chapter-navigation-bar';
import Chapter from './chapter';

const HomeContainer = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ghostwhite;
`;

const HomeContent = styled.div`
  max-width: 55rem;
  width: 55rem;
  color: #070766;
  line-height: 1.1rem;
  background: #070766;
  background: ghostwhite;
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
      data: [],
      isLoading: true,
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      this.setState({
        chapterContent: this.props.data[this.state.chapterIndex].chapterContent,
        chapterTitle: this.props.data[this.state.chapterIndex].chapterTitle,
        data: this.props.data,
        isLoading: false,
      });
    };
  };

  refreshGuide = (direction) => {
    this.setState((prevState) => ({
      chapterContent: this.props.data[this.state.chapterIndex + direction].chapterContent,
      chapterIndex: prevState.chapterIndex + direction,
      chapterTitle: this.props.data[this.state.chapterIndex + direction].chapterTitle,
      data: this.props.data,
    }));
  }

  goToPreviousChapter = () => {
    if (this.state.chapterIndex===0) {
      return;
    }
    this.refreshGuide(-1);
  };

  goToNextChapter = () => {
    if (this.state.chapterIndex===42) {
      return;
    }
    this.refreshGuide(1);
  };

  render() {
    return (
      <Fragment>
        <NavBar />
        <HomeContainer>
          <HomeContent>
            <ChapterNavBar
              chapterIndex={this.state.chapterIndex}
              goToPreviousChapter={this.goToPreviousChapter}
              goToNextChapter={this.goToNextChapter}
            />
            <ChapterTitle>
              {this.state.chapterIndex} - {this.state.chapterTitle}
            </ChapterTitle>
            {this.state.isLoading && (
              <LoadingIndicator />
            )}
            <Chapter content={this.state.chapterContent}/>
          </HomeContent>
        </HomeContainer>
      </Fragment>
    );
  }
}

export default Home;