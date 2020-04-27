import React from "react";
import './todo-list.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import ToDoListItem from "../todo-list-item/todo-list-item";
import {TodoListActions} from "../store/actions/actions";
import {selectFilteredTasks} from '../store/selectors'

const ToDoList = ({tasks}) => {
    return (
        <div className="list-item-conteiner">
            <h3>Your Tasks: </h3>
            <ul className="items-list">
                {
                    tasks.map((task, index) => {
                        return (
                            <div key={task.id} className="list-item">
                                <CSSTransition in={true} timeout={200} classNames="my-node">
                                    <div>
                                        <ToDoListItem task={task}
                                                      index={index}
                                        />
                                    </div>
                                </CSSTransition>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tasks: selectFilteredTasks(state)
    }
}

const mapDispatchToProps = {
    TodoListActions
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);