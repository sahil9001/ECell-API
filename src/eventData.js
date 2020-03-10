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
                if((this.props.match.params.id - 12)!==10){
                this.setState({ items: data.data[this.props.match.params.id - 12] })
                console.log(this.state.items)
                }
                else{
                    this.setState({items:data.data[this.props.match.params.id-13]})
                }
            })
            .catch(console.log)
    }
    render(){
        const items = this.state.items;
           
        return(
            
            <div className="mx-auto" style={{width: 30 + 'em'}}>
                <br></br>
                <br></br>
                <img className="card-img-top" src={items.icon_url} width="400" height="400"/>
                <h1 className="card-title text-light">{items.name}</h1>
                <h4 className="card-subtitle mb-2  text-light" style={{textAlign:'left'}} >Venue: {items.venue}</h4>
                <h4 className="card-subtitle mb-2  text-light" style={{textAlign:'left'}}>Time: {items.time}</h4>
                <h5 style={{textAlign:'left'}}> Date: {items.date}</h5>
                <br></br>
                <p className="card-text text-light" style={{textAlign:'left'}}>{items.details}</p>
                <h4 className="card-text mb-2 text-light" style={{textAlign:'left'}}>Email: {items.email}</h4>
                <h4 className="card-subtitle text-light" style={{textAlign:'left'}}>Registered: {items.no_of_ppl_registered}</h4>
                
            </div>
         
        )
    }
}
export default eventData;