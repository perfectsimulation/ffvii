import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Tabletop from 'tabletop';

import { Card, Link as RRDLink, PageContainer, PageTitle } from '../commons/styles';
import ChapterNavBar from '../chapter/chapter-navigation-bar';

const Link = styled(RRDLink)`
  text-align: left;
  color: #070766;
`;

class EnemyList extends Component {
  constructor() {
    super();
    this.state = {
      enemiesData: [],
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: '1oMOT58tMqIowgt1wK_xDo0c1RkIfRn0K6wPMhcgG-wk',
      callback: googleData => {
        this.setState({
          enemiesData: googleData,
        });
      },
      simpleSheet: true,
    });
  };

  createList = () => {
    const list = this.state.enemiesData.map(enemy => {
      return (
        <Link key={enemy.enemyIndex} to={{
          pathname: `/enemy/${enemy.enemyName}`,
          state: {
            entry: enemy.enemyEntry,
            name: enemy.enemyName,
            photoUrl: enemy.enemyPhotoUrl,
          },
        }}
        >
          {enemy.enemyName}
        </Link>
      )
    });
    return list;
  };

  getEntry = (enemyName) => {
    const entry = this.state.enemiesData.filter(enemy => enemy.enemyName === enemyName);
    if (entry[0]) {
      return entry[0].enemyEntry;
    }
  };

  render() {
    return (
      <Fragment>
        <ChapterNavBar />
        <PageContainer>
          <PageTitle>
            Enemy Encyclopedia
          </PageTitle>
          <Card>
            {this.createList()}            
          </Card>
        </PageContainer>
      </Fragment>
    );
  };
}

export default EnemyList;