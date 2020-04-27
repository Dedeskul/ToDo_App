import React, {Component} from "react";
import './todo-list-item.css';
import {DeleteTask, markAsDone, markAsImportant} from '../store/actions/actions';
import {connect} from 'react-redux'


const ToDoListItem = ({task, index, DeleteTask, markAsImportant, markAsDone}) => {

    const deleteOnKlick = () => {
        DeleteTask(index)
    }

    const marcTaskAsImportant = () => {
        console.log(task.id)
        markAsImportant(task.id);
    }

    const markTaskAsDone = () => {
        markAsDone(task.id);
    }

    return (
        <div className={`item ${task.important ? 'important' : ''}`}>
            <div className="item-info">
                <input type="checkbox" checked={`${task.done ? 'checked' : ''}`}/>
                <label className={`${task.done ? 'done' : ''}`}>{task.text}</label>
            </div>

            <div className="buttonsGroup">
                <a onClick={markTaskAsDone}> ✔ </a>
                <a onClick={marcTaskAsImportant} title="Mark as important"> ❕ </a>
                <a onClick={deleteOnKlick} title="Delete task"> ❌ </a>
            </div>
        </div>
    )
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