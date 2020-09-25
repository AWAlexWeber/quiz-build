import React from 'react';
import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';

import '../css/Square.css';

export default class Square extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: 150,
            left: 0,
            width: 250,
            height: 90
        }

        this.move = this.move.bind(this);
    }

    move(e) {
        console.log(e);
        this.setState({left: e.pageX - this.offsetX, top: e.pageY - this.offsetY});
    }

    mouseDown(e) {
        const page=e.target
        this.offsetX = e.clientX-page.getBoundingClientRect().left
        this.offsetY = e.clientY-page.getBoundingClientRect().top
        console.log(this.offsetX,this.offsetY);
        this.props.mainPage.addEventListener('mousemove', this.move)
    }

    mouseUp(e) {
        const page=e.target
        this.props.mainPage.removeEventListener('mousemove', this.move)
    }

    render() {
        
        return (
            <Paper elevation = {20} className = "quizSquare" onMouseUp = {(e) => {this.mouseUp(e)}} onMouseDown = {(e) => {this.mouseDown(e)}}style = {{width: this.state.width, height: this.state.height, top: this.state.top, left: this.state.left}}>
                <div className = "quizSquareTitle">Square</div>
            </Paper>
        )
    }
}