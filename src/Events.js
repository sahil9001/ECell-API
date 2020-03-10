import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.itemRenderer = this.itemRenderer.bind(this);
        this.handleRLDDChange = this.handleRLDDChange.bind(this);
    }
    componentDidMount() {
        fetch('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.data })
                console.log(this.state.items)
            })
            .catch(console.log)
    }
    // [...]

    render() {
        const items = this.state.items;
        return (
          <div className="container">
           <br></br>
           <br></br>
           
            <h1 className="text-light">ECell events</h1>
            <h5 className="text-light">Current events:</h5>
            
            <RLDD
              items={items}
              itemRenderer={this.itemRenderer}
              onChange={this.handleRLDDChange}
            />
           
          </div>
        );
      }
    
      itemRenderer(item, index) {
        return (
         <div class=" container">
          <li className="list-group-item list-group-item-info">
            <Link to={`/events/${item.id}`} style={{textDecorationColor:'white'}}>{index+1} . {item.name}</Link>
          </li>
         </div>
        );
      }
    
    handleRLDDChange(reorderedItems) {
        this.setState({ items: reorderedItems });
      }
}
export default Event;