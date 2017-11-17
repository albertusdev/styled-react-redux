import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';

class Home extends Component {
  state = {}
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing}/>
      </Switch>
    );
  }
};

export default Home;
