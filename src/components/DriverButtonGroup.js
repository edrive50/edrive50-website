import React, { Component, Fragment } from 'react';
import { ButtonGroup, Button} from 'react-bootstrap';
import './DriverButtonGroup.css'
import { pipeFromArray } from 'rxjs/internal/util/pipe';

class DriverButtonGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account_status: props.account_status,
            driver_id: props.driver_id,
            unlocked_colour: 'primary',
            locked_colour: 'secondary'
        }

    }

    componentDidMount() {
        if (this.state.account_status == "Locked") {
            this.setState({locked_colour: 'danger', unlocked_colour: 'secondary'});
        } else if (this.state.account_status == "Unlocked") {
            this.setState({ locked_colour: 'secondary', unlocked_colour: 'success' });
        } else {
            this.setState({ locked_colour: 'secondary', unlocked_colour: 'secondary' });
        }
    }

    /**
     * Drivers
     * Kurtis Newcombe
     * Olive Dupéré
     * Jakov Petrović
     * Evelyn Giannopoulos
     * Bastien Lavoie
     * Rory MacLeod
     * 
     * Riders
     * Tayamika Nawa
     * Paul Le Blanc
     * Semiha Karga
     * Katia Silva
     * Francesco Cavalcante
     */

    switchToLocked = (ev) => {
        // console.log("Locked")
        this.setState({ locked_colour: 'danger', unlocked_colour: 'secondary' });
        console.log(this.state.driver_id);
        this.props.locked(this.state.driver_id)
    }

    switchToUnlocked = (ev) => {
        // console.log("Unlocked")
        this.setState({ locked_colour: 'secondary', unlocked_colour: 'success' });
        console.log(this.state.driver_id);
        this.props.unlocked(this.state.driver_id)
        
    }

    render() {
        return (
            <Fragment>
                <ButtonGroup size="md">
                    <Button className="locked" variant={this.state.locked_colour} onClick={this.switchToLocked}>Locked</Button>
                    <Button className="unlocked" variant={this.state.unlocked_colour} onClick={this.switchToUnlocked}>Unlocked</Button>
                   
                </ButtonGroup>
            </Fragment>
        );

        // { this.state.account_status }
    }
}

export default DriverButtonGroup;