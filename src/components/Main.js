import React from 'react';
import ReactDOM from 'react-dom';

import Button from '@material-ui/core/Button';
import QuestionSquare from './QuestionSquare';

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
        currentSquares.push(<QuestionSquare key = {this.state.squares.length} mainPage = {this.mainContainer}/>);
        this.setState({squares: currentSquares});
    }

    render() {
        console.log(this.state.squares);
        return (
            <div className = "mainContainer">
                <TopBar addSquare = {this.addSquare}/>

                <div ref = {element => this.mainContainer = element} className = "mainSquareContainer">
                    {this.state.squares.map(sq => sq)}
                </div>

                <BottomBar />
            </div>
        )
    }
}

class TopBar extends React.Component {
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

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = "bottomBar">
                Quiz-Build V0.1.1
            </div>
        );
    }
}