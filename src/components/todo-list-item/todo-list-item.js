import React, {Component} from "react";
import './todo-list-item.css';
import {DeleteTask, markAsDone, markAsImportant} from '../store/actions/actions';
import {connect} from 'react-redux'

class ToDoListItem extends Component {


    render() {

        const {task, index} = this.props;

        const deleteOnKlick = () => {
            this.props.DeleteTask(index)
            console.log(index)
        }

        const marcAsImportant = () => {
            this.props.markAsImportant(task.id);
        }

        const markAsDone = () => {
            this.props.markAsDone(task.id);
        }

        return (
            <div className={`item ${task.important ? 'important' : ''} ${task.done? 'done': ''}`}>
                {task.text}
                <div className="buttonsGroup">
                    <a onClick={markAsDone}>
                        ✔
                    </a>
                    <a onClick={marcAsImportant}>
                        ❕
                    </a>
                    <a onClick={deleteOnKlick}>
                        ❌
                    </a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({tasks}) => {
    return {
        tasks
    }
}

const mapDispatchToProps = dispatch => ({
    DeleteTask: id => dispatch(DeleteTask(id)),
    markAsImportant: index => dispatch(markAsImportant(index)),
    markAsDone: index => dispatch(markAsDone(index))
})


export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);