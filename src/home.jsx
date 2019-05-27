import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import config from './config';
import { load } from './helpers/spreadsheet';

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
  color: ghostwhite;
  line-height: 1.1rem;
  background: #070766;
`;

const ChapterTitle = styled.p`
  font-size: 1.2rem;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      chapterIndex: 0,
      chapterTitle: 'The Reactor #1 raid',
    };
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.refreshGuide);
  };

  refreshGuide = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
    .init({
      apiKey: config.apiKey,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
    // 3. Initialize and make the API request.
    load(this.onLoad);
    });
  };

  onLoad = (data, error) => {
    if (data) {
      const chapters = data.chapters;
      this.setState({
        chapterTitle: chapters[this.state.chapterIndex].title,
        chapterContent: chapters[this.state.chapterIndex].content,
      });
    } else {
      this.setState({ ...error });
    }
  };

  goToPreviousChapter = () => {
    if (this.state.chapterIndex===0) {
      return;
    }
    this.setState((prevState) => ({
      chapterIndex: prevState.chapterIndex - 1,
    }));
    this.refreshGuide();
  };

  goToNextChapter = () => {
    this.setState((prevState) => ({
      chapterIndex: prevState.chapterIndex + 1,
    }));
    this.refreshGuide();
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
            <Chapter content={this.state.chapterContent}/>
          </HomeContent>
        </HomeContainer>
      </Fragment>
    );
  }
}

export default Home;