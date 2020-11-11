/* Primary imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* Using the MoveableObj as the primary tool here */
import MoveableObj from './MoveableObj';

/* Importing primary font-awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave, faLock, faUnlock, faTrash } from '@fortawesome/free-solid-svg-icons'

/* Adding material-ui to make things nice and pretty, as well as our own css */
import TextField from '@material-ui/core/TextField';
import '../css/Square.css';

/* QuestionSquare is a direct extension of MoveableObj, with the added functionality of question data */
export default class QuestionSquare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "New Question",
            editMode: false,
            locked: false,

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

    /* Interactions with primary question data */
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }

    onChangePromptTitle(e) {
        this.setState({promptTitle: e.target.value});
    }

    onChangePrompt(e) {
        this.setState({prompt: e.target.value});
    }
    /* End primary question data segment */

    render() {

        // Loading all of the icons.
        let titleText = <div className ="quizSquareTitleText">{this.state.title}</div>
        let titleIcon = <FontAwesomeIcon icon={faPen} onClick = {() => {this.setState({editMode: true})}}/>;
        let lockIcon = <FontAwesomeIcon icon={faUnlock} onClick = {() => {this.setState({locked: !this.state.locked})}}/>;
        let deleteIcon = <FontAwesomeIcon icon={faTrash} onClick = {() => {this.setState({locked: !this.state.locked})}}/>;

        let promptTitle = <div className ="quizSquarePromptTitle">
            <div className = "quizSquarePromptTitleHeader">Title:</div>
            <div className = "quizSquarePromptTitleInner">{this.state.promptTitle}</div>
        </div>
        let promptText = <div className ="quizSquarePromptData">
            <div className = "quizSquarePromptTitleHeader">Prompt:</div>
            <div className = "quizSquarePromptTitleInner">{this.state.prompt}</div>
        </div>

        // Changing some of the icons based on what mode we're in.
        if (this.state.editMode) {
            titleText = <div className ="quizSquareTitleText"><TextField onChange = {(e) => this.onChangeTitle(e)} value = {this.state.title} className = "quizSquareTitleTextField"/></div>;
            titleIcon = <FontAwesomeIcon icon={faSave} onClick = {() => {this.setState({editMode: false})}}/>;

            promptTitle = <div className ="quizSquarePromptTitle"><TextField onChange = {(e) => this.onChangePromptTitle(e)} value = {this.state.promptTitle} className = "quizSquarePromptTitleTextField"/></div>
            promptText = <div className ="quizSquarePromptData"><TextField multiline onChange = {(e) => this.onChangePrompt(e)} value = {this.state.prompt} className = "quizsquarePromptFullTextField"/></div>
        }

        if (this.state.locked) {
            lockIcon = <FontAwesomeIcon icon={faLock} onClick = {() => {this.setState({locked: !this.state.locked})}}/>;
        }
        
        return (
            <MoveableObj
                mainPage = {this.props.mainPage}
                canMove = {!this.state.editMode}
                locked = {this.state.locked}
                content = {
                    <div className = "quizSquareContainer">
                        <div className = "quizSquareIconHeader">
                            {titleIcon}
                            {lockIcon}
                            {deleteIcon}
                        </div>

                        <div className = "quizSquareTitle">
                            {titleText}
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