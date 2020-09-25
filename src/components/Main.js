import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import Square from './Square';

import '../css/Main.css';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: []
        }

        this.addSquare = this.addSquare.bind(this);
    }

    addSquare() {
        let currentSquares = this.state.squares;
        currentSquares.push(<Square key = {this.state.squares.length} mainPage = {this.mainContainer}/>);
        this.setState({squares: currentSquares});
    }

    render() {
        console.log(this.state.squares);
        return (
            <div className = "mainContainer">
                <MainBottomBar addSquare = {this.addSquare}/>

                <div ref = {element => this.mainContainer = element} className = "mainSquareContainer">
                    {this.state.squares.map(sq => sq)}
                </div>
            </div>
        )
    }
}

class MainBottomBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "mainBottomBar">
                <Button onClick = {() => {this.props.addSquare()}}className = "bottomBarButton" variant="contained">Add Square</Button>
            </div>
        )
    }
}