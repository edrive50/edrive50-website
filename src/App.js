import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import axios from "axios";
import Table from './components/DriverTable'
import './App.css';

/**
 * TODO:
 *      Like everything
 *      Put the var myJsonString = JSON.stringify(yourArray); in my code
 *      do loop in the server area to repreating update on backend
 *      return update ok at the end to client end
 *      
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            drivers: null,
            load_done: false
        }
    }
    componentDidMount() {
        // sending board to server
        axios.get("/app/admin/drivers/")
        .then(response => {
            this.setState({ drivers: response.data, load_done: true })
            // this.getBoard();
            console.log(response.data)
        })
        .catch(err => console.error(err));

        this.setState({created: true})
    }
    render() {
        const { load_done } = this.state;
        return (
            load_done ? (
                 (this.state.drivers && (
                    <Fragment>
                        <h1>List of Drivers</h1>
                        <Table drivers={this.state.drivers}/>
                    </Fragment>
                 ))
            ):(
                <div className="App">
                    <h2>Loading...</h2>
                </div>
            )
        );
    }
}

export default App;
