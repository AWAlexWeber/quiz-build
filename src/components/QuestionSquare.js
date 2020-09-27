import React from 'react';
import ReactDOM from 'react-dom';
import MoveableObj from './MoveableObj';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons'

import TextField from '@material-ui/core/TextField';

import '../css/Square.css';

export default class QuestionSquare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "New Question",
            editMode: false,

            promptTitle: "Title",
            prompt: "This is where the prompt for the question will go",

            quizChoices: [
                <div className = "quizChoice">a) Red</div>,
                <div className = "quizChoice">b) Blue</div>,
                <div className = "quizChoice">c) Pink</div>,
                <div className = "quizChoice">d) Black</div>
            ]
        }; 
    }

    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangePromptTitle(e) {
        this.setState({promptTitle: e.target.value});
    }

    onChangePrompt(e) {
        this.setState({prompt: e.target.value});
    }

    render() {

        // Checking for edit mode
        let titleText = <div className ="quizSquareTitleText">{this.state.title}</div>
        let titleIcon = <FontAwesomeIcon icon={faPen} onClick = {() => {this.setState({editMode: true})}}/>;

        let promptTitle = <div className ="quizSquarePromptTitle">
            <div className = "quizSquarePromptTitleHeader">Title:</div>
            <div className = "quizSquarePromptTitleInner">{this.state.promptTitle}</div>
        </div>
        let promptText = <div className ="quizSquarePromptData">
            <div className = "quizSquarePromptTitleHeader">Prompt:</div>
            <div className = "quizSquarePromptTitleInner">{this.state.prompt}</div>
        </div>

        if (this.state.editMode) {
            titleText = <div className ="quizSquareTitleText"><TextField onChange = {(e) => this.onChangeTitle(e)} value = {this.state.title} className = "quizSquareTitleTextField"/></div>;
            titleIcon = <FontAwesomeIcon icon={faSave} onClick = {() => {this.setState({editMode: false})}}/>;

            promptTitle = <div className ="quizSquarePromptTitle"><TextField onChange = {(e) => this.onChangePromptTitle(e)} value = {this.state.promptTitle} className = "quizSquarePromptTitleTextField"/></div>
            promptText = <div className ="quizSquarePromptData"><TextField multiline onChange = {(e) => this.onChangePrompt(e)} value = {this.state.prompt} className = "quizsquarePromptFullTextField"/></div>
        }
        
        return (
            <MoveableObj
                mainPage = {this.props.mainPage}
                canMove = {!this.state.editMode}
                render = {
                    <div className = "quizSquareContainer">
                        <div className = "quizSquareTitle">
                            {titleText}
                            {titleIcon}
                        </div>

                        <div className = "quizSquarePrompt">
                            {promptTitle}
                            {promptText}
                        </div>

                        <div className = "quizSquareChoiceContainer">
                            <div className = "quizSquareChoiceTitle">Options</div>
                            <div className = "quizSquareChoice">
                                {this.state.quizChoices}
                            </div>
                        </div>
                    </div>
                }
            />
        )
    }
}