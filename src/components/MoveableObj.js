import React from 'react';
import ReactDOM from 'react-dom';

import Paper from '@material-ui/core/Paper';

import '../css/MoveableObj.css';

export default class MoveableObj extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: 150,
            left: 0,
            width: 250,
            height: 180
        };

        this.move = this.move.bind(this);
    }
    
    move(e) {
        if (!this.props.canMove) {
            return;
        }

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

    changeHeight(height) {

        if (height <= this.props.minHeight) {
            height = this.props.minHeight;
        }

        else if (height >= this.props.maxHeight) {
            height = this.props.maxHeight;
        }

        this.setState({height: height});
    }

    render() {
        let canHighlight = "";
        if (this.props.canMove) {
            canHighlight = "cannotHighlight";
        }

        return ( 
            <Paper elevation = {20} className = {"moveableObj" + " " + canHighlight} onMouseUp = {(e) => {this.mouseUp(e)}} onMouseDown = {(e) => {this.mouseDown(e)}}style = {{width: this.state.width, height: this.state.height, top: this.state.top, left: this.state.left}}>
                {this.props.render}
            </Paper>
        )
    }
}