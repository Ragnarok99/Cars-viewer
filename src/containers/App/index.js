import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import CarDetails from '../../components/CarDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={CarDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
