import React, { Component, Fragment } from 'react';
import './App.css';
import Tabletop from 'tabletop';

import Home from './home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chaptersData: [],
      enemiesData: [],
    };
  };

  componentDidMount() {
    Tabletop.init({
      key: '1_BCe5KLbacLGag2zLbNmqRpz3T4_vqzk0_BD1nV5_do',
      callback: googleData => {
        // console.log(googleData);
        this.setState({
          chaptersData: googleData,
        });
      },
      simpleSheet: true,
    });
    Tabletop.init({
      key: '1oMOT58tMqIowgt1wK_xDo0c1RkIfRn0K6wPMhcgG-wk',
      callback: googleData => {
        // console.log(googleData);
        this.setState({
          enemiesData: googleData,
        });
      },
      simpleSheet: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Home
          guide={this.state.chaptersData}
          enemies={this.state.enemiesData}
        />
      </Fragment>
    );
  }
}

export default App;
