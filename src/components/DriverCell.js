import React, { Component, Fragment } from 'react';
import ButtonGroup from './DriverButtonGroup'
// import { Dropdown } from 'react-bootstrap';


class DriverCell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            driver: props.driver,
            driver_id: props.driver.driver_id,
            num: props.num
        }
    }



    render() {
        var car = `${this.state.driver.car_details.year} ${this.state.driver.car_details.make} ${this.state.driver.car_details.model}`
        // console.log(this.state.driver);
        return (
            <Fragment>
                <tr>
                    <td>{parseInt(this.state.num) + 1}</td>
                    <td>{this.state.driver.name}</td>
                    <td>{car}</td>
                    <td>{this.state.driver.car_details.car_type}</td>
                    <td>{this.state.driver.car_details.registrations_details.vin}</td>
                    <td>{this.state.driver.car_details.registrations_details.licence_plate}</td>
                    <td>
                        <ButtonGroup locked={this.props.locked} unlocked={this.props.unlocked} driver_id={this.state.driver_id} account_status={this.state.driver.account_status}/>
                    </td>
                </tr>
               
            </Fragment>
        );
    }
}

export default DriverCell;