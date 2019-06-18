import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Card, PageContainer, PageTitle } from '../commons/styles';
import ChapterNavBar from '../chapter/chapter-navigation-bar';

const EnemyCard = styled(Card)`
  text-align: left;
  font-size: 0.95rem;
`;

const EnemyPhoto = styled.img`
  padding: 0.5rem;
`;

class EnemyDetail extends Component {
  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <PageContainer>
          <PageTitle>{this.props.location.state.name}</PageTitle>
          <EnemyPhoto src={this.props.location.state.photoUrl} alt={this.props.location.state.name}/>
          <EnemyCard><pre>{this.props.location.state.entry}</pre></EnemyCard>
        </PageContainer>
      </Fragment>
    );
  };
}

export default EnemyDetail;