/* Primary imports */
import React from 'react';

/* Importing our main components */
import QuestionSquare from './QuestionSquare';
import TopBar from './TopBar';

/* Importing beautification files */
import '../css/Main.css';

/* Our main class contains all of the primary data management and interactability that gets extended throughout the screen */
export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            squares: [],
            lines: []
        }

        this.addSquare = this.addSquare.bind(this);
        this.deleteSquare = this.deleteSquare.bind(this);
    }

    /* Function to be called when we want to add a new square to the view.
    Args:
        None
    Returns:
        None
    */
    addSquare() {
        let currentSquares = this.state.squares;
        currentSquares.push(<QuestionSquare key = {this.state.squares.length} mainPage = {this.mainContainer}/>);
        this.setState({squares: currentSquares});
    }

    /* Function for deleting a current square. Use the given index to let us know where within our array we want to delete.
    Args:
        index (int): Position within the current states squares array to delete
    Returns:
        None
    */
   deleteSquare(index) {
       let currentSquares = this.state.squares;
       currentSquares.pop(index)
       this.setState({squares: currentSquares});
   }

    render() {

        return (
            <div className = "mainContainer">
                <TopBar addSquare = {this.addSquare} />

                <div ref = {element => this.mainContainer = element} className = "mainSquareContainer">
                    {this.state.squares.map(sq => sq)}
                    {this.state.lines.map(line => line)}
                </div>

                <BottomBar />
            </div>
        )
    }
}

/* Simple bottom bar, not needed as a seperate class */
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