import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Navb extends Component {
    render() {
        var style = {
            color:'white',
          
        }
        return (
            <Navbar bg="secondary" variant="dark">
                <Navbar.Brand href="/">E-Cell Assignment</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" style={{ textDecoration: 'none' , color:'white',marginRight:10, marginLeft:10}}>Home</Link>
                    <Link to="/events" style={{ textDecoration: 'none', color: 'white',marginRight:10,marginLeft:10 }}>Events</Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Navb;