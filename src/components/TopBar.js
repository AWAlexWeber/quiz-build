/* Primary imports */
import React from 'react';

/* Loading in material ui */
import Button from '@material-ui/core/Button';

/* TopBar provides data along the top of the screen. This is the primary spot where interaction buttons are contained */
export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "topBar">
                <Button onClick = {() => {this.props.addSquare()}}className = "topBarButton" variant="contained">Add Square</Button>
            </div>
        )
    }
}