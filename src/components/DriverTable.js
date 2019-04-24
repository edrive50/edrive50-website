import React, { Component, Fragment } from 'react';
import { Table } from 'react-bootstrap';
import Cell from './DriverCell'
import axios from "axios";
import {  Button } from 'react-bootstrap';


class DriverTable extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            drivers: props.drivers,
            unlocked: [],
            locked: []
        }
    }

    // toArray = (jsonStr) => {
    //     return new JSON.parse(jsonStr);
    // }

    unlocked = (driver_id) => {
        var unlockedArr = this.state.unlocked
        var lockedArr = this.state.locked
        var filtered = [];

        if (!unlockedArr.includes(driver_id)) {
            unlockedArr.push(driver_id)

            
            this.setState({ unlocked: unlockedArr });
        }

        if (lockedArr.includes(driver_id)) {
            filtered = lockedArr.filter(function (value, index, arr) {
                return value != driver_id;
            });

            // console.log()
           
            if (filtered !== undefined) this.setState({ locked: filtered });
        }

        console.log("unlocked: ", unlockedArr)
        console.log("locked: ", filtered)
        
    }
    
    locked = (driver_id) => {
        var newArr = this.state.unlocked
        var lockedArr = this.state.locked
        var filtered = [];

        if (!lockedArr.includes(driver_id)) {
            lockedArr.push(driver_id)

            // console.log()
            
            this.setState({ locked: lockedArr });
        }


        if (newArr.includes(driver_id)) {
            filtered = newArr.filter(function (value, index, arr) {
                return value != driver_id;
            });
            
            // console.log()
            if (filtered !== undefined) this.setState({ unlocked: filtered });
        }
        
        console.log("unlocked: ", filtered)
        console.log("locked: ", lockedArr)
        
    }

    sendToServer = (ev) => {
        
        var unlockedArray = JSON.stringify(this.state.unlocked);
        
        if (unlockedArray.length > 0) {
            axios.put("/app/admin/drivers/unlock", { unlocked: unlockedArray }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.error(err));
        }

        var lockedArray = JSON.stringify(this.state.locked);

        if (lockedArray.length > 0) {
            axios.put("/app/admin/drivers/lock", { locked: lockedArray }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => console.error(err));
        }
        
    }

    

    render() {
        // var cells = [];
        
        console.log(this.state.drivers)
        var cells = Object.entries(this.state.drivers["drivers"]).map((driver, key) => 
            <Cell driver={driver[1]} num={driver[0]} key={key} driver_id={driver[1].driver_id} locked={this.locked} unlocked={this.unlocked}/>
        )
        // // console.log(this.state.drivers[2])
        // console.log(cells)
        return (
            <Fragment>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Car</th>
                            <th>Car Type</th>
                            <th>Vehicle Insurance Number</th>
                            <th>Licence Plate</th>
                            <th>Account Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cells}
                    </tbody>
                </Table>
                <Button onClick={this.sendToServer}>Update</Button>
            </Fragment>
        );
    }
}

export default DriverTable;