import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import styles from './Back.module.css'
class App extends Component {
    render() {
        return (
            <div className={styles}>
                <br></br>
                <br></br>
                <h1 className="text-light">Ecell API Assignment</h1>
                <h3 className="text-light">Tasks completed:</h3>
                <ul className={styles}>
                    <li className="text-light"> The app fetches the data from API and displays it.</li>
                    <li className="text-light">Doesn't refresh while switching between Home and Events page.</li>
                    <li className="text-light">The list is rearrangable which means that items can be moved up or down and the list reoreders itself.</li>
                    <li className="text-light">Improved UI.</li>
                </ul>
            </div>
        )
    }
}

export default App;