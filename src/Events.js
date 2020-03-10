import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
           
            <h1 className="">ECell events</h1>
            <h5>Current events:</h5>
            
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
         <div class="card">
           <div class="card-title">
            <Link to={`/events/${item.id}`}>{index} . {item.name}</Link>
            </div>
         </div>
        );
      }
    
    handleRLDDChange(reorderedItems) {
        this.setState({ items: reorderedItems });
      }
}
export default Event;