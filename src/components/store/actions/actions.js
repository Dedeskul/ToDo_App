import {ADD_NEW_TASK, DELETE_TASK, MARK_AS_IMPORTANT, MARK_AS_DONE} from "./actions-description";

const TodoListActions = (newTask) => {
    return {
        type: ADD_NEW_TASK,
        payload: {
            id: Math.random() * 10,
            text: newTask,
            done: false,
            important: false
        }
    }
}

const DeleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
}

const markAsImportant = (index) => {
    return {
        type: MARK_AS_IMPORTANT,
        payload: index
    }
}

const markAsDone = (id) => {
    return {
        type: MARK_AS_DONE,
        payload: id
    }
}

export {
    TodoListActions,
    DeleteTask,
    markAsDone,
    markAsImportant
};