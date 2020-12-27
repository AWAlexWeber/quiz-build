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
            squares: {},
            lines: []
        }

        this.addSquare = this.addSquare.bind(this);
        this.deleteSquare = this.deleteSquare.bind(this);

        // Keeping track of the number of squares, indexed.
        this.squareIndex = 0;
    }

    /* Function to build a new square. This makes it easier for us to visualize the add square function as our QuestionSquare gets larger
    Args:
        index (int): Index of the square, used as the key
    Returns:
        QuestionSquare JSX object, to be attached to the view
    */
   buildSquare(index) {
        let newSquare = <QuestionSquare 
            key = {index} 
            mainPage = {this.mainContainer}
            deleteSquare = {this.deleteSquare}
        />;
        return newSquare;
    }

    /* Function to be called when we want to add a new square to the view.
    Args:
        None
    Returns:
        None
    */
    addSquare() {
        let currentSquares = this.state.squares;
        currentSquares[this.squareIndex] = this.buildSquare(this.squareIndex); 
        this.squareIndex += 1;
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

        // Getting our renderable squares
        let renderSquares = [];
        for (var sqKey in this.state.squares) {
            console.log(sqKey);
            renderSquares.push(this.state.squares[sqKey]);
        }

        return (
            <div className = "mainContainer">
                <TopBar addSquare = {this.addSquare} />

                <div ref = {element => this.mainContainer = element} className = "mainSquareContainer">
                    {renderSquares}
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
                Quiz-Build V1.1.1
            </div>
        );
    }
}