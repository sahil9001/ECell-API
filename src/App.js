import React, { Component } from 'react';
import Event from './Events';
import Home from './Home';
import Navb from './Nav';
import eventData from './eventData';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navb />
          
            <Route path="/" exact component={Home} />
            <Route path="/events" exact component={Event} />
            <Route path="/events/:id" exact component={eventData} />
        </div>
      </Router>
    )
  }
}

export default App;