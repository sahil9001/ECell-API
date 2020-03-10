import React, { Component } from 'react';
import Event from './Events';

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
      <div className="container">
      <h1>Ecell API Assignment</h1>    
      </div>
    )
  }
}

export default App;