import {
    ADD_NEW_TASK,
    DELETE_TASK,
    MARK_AS_IMPORTANT,
    MARK_AS_DONE,
    SHOW_ALL_IMPORTANT_TASKS,
    SHOW_ALL_DONE_TASKS,
    SHOW_ALL_TASKS
} from "./actions-description";

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
};

const DeleteTask = (index) => {
    return {
        type: DELETE_TASK,
        payload: index
    }
};

const markAsImportant = (index) => {
    return {
        type: MARK_AS_IMPORTANT,
        payload: index
    }
};

const markAsDone = (id) => {
    return {
        type: MARK_AS_DONE,
        payload: id
    }
};

const showAllImportantTasks = (important) => {
    return {
        type: SHOW_ALL_IMPORTANT_TASKS,
        payload: important
    }
}

const showAllDoneTasks = (done) => {
    return {
        type: SHOW_ALL_DONE_TASKS,
        payload: done
    }
}

const showAllTasks = () => {
    return {
        type: SHOW_ALL_TASKS
    }
}

export {
    TodoListActions,
    DeleteTask,
    markAsDone,
    markAsImportant,
    showAllImportantTasks,
    showAllDoneTasks,
    showAllTasks
};