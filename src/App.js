import React, { Component, Fragment } from 'react';
import './App.css';
import Tabletop from 'tabletop';

import Home from './home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  };

  componentDidMount() {
    Tabletop.init({
      key: '1_BCe5KLbacLGag2zLbNmqRpz3T4_vqzk0_BD1nV5_do',
      callback: googleData => {
        // console.log(googleData);
        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Home data={this.state.data}/>
      </Fragment>
    );
  }
}

export default App;
