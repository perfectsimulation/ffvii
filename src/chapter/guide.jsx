import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Tabletop from 'tabletop';

import { Card, PageContainer } from '../commons/styles';
import LoadingIndicator from '../helpers/loading-indicator';

import ChapterNavigation from './chapter-navigation';
import ChapterWalkthrough from './chapter-walkthrough';
import ChapterChecklist from './chapter-checklist';

const GuideContainer = styled(PageContainer)`
  padding-top: 0;
`;

const GuideContent = styled.div`
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

class Guide extends Component {
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

  componentDidMount() {
    Tabletop.init({
      key: '1_BCe5KLbacLGag2zLbNmqRpz3T4_vqzk0_BD1nV5_do',
      callback: googleData => {
        // console.log(googleData);
        this.setState({
          guide: googleData,
          isLoading: false,
        });
      },
      simpleSheet: true,
    });
  };

  componentDidUpdate() {
    if (this.state.chapterTitle === '0') {
      this.refreshGuide(0);
    }
  };

  refreshGuide = (direction) => {
    const newIndex = this.state.chapterIndex + direction;
    this.setState({
      chapterContent: this.state.guide[newIndex].chapterContent,
      chapterIndex: this.state.chapterIndex + direction,
      chapterTitle: this.state.guide[newIndex].chapterTitle,
      chapterTreasure: this.state.guide[newIndex].chapterTreasure,
      guide: this.state.guide,
    });
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
        <GuideContainer>
          {this.state.isLoading && (
            <LoadingIndicator />
          )}
          <GuideContent isLoading={this.state.isLoading}>
            <ChapterTitle>
              {this.state.chapterIndex} - {this.state.chapterTitle}
            </ChapterTitle>
            <ChapterChecklist
              index={this.state.chapterIndex}
              list={this.state.chapterTreasure}
            />
            <ChapterWalkthrough content={this.state.chapterContent}/>
          </GuideContent>
        </GuideContainer>
      </Fragment>
    );
  };
};

export default Guide;