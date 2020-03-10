import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
class eventData extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        console.log(this.props.match.params.id)
    }
    componentDidMount() {
        fetch('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data.data[this.props.match.params.id - 12] })
                console.log(this.state.items)
            })
            .catch(console.log)
    }
    render(){
        const items = this.state.items;
           
        return(
            
            <div className="container mx-auto" style={{width: 30 + 'em'}}>
                <br></br>
                <br></br>
                <img className="card-img-top" src={items.icon} width="400" height="400"/>
                <h1 className="card-title">{items.name}</h1>
                <h4 className="card-subtitle mb-2 text-muted">{items.venue}</h4>
                <h3>{items.date}</h3>
                <p className="card-text">{items.details}</p>
            </div>
         
        )
    }
}
export default eventData;