import React, { Component, Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';


class DriverDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account_status: props.account_status
        }
    }



    render() {
        return (
            <Fragment>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        {this.state.account_status}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Locked</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Unlocked</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Fragment>
        );
    }
}

export default DriverDropdown;