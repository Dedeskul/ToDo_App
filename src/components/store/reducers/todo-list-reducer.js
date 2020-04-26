import {ADD_NEW_TASK, DELETE_TASK, MARK_AS_DONE, MARK_AS_IMPORTANT} from "../actions/actions-description";

const tasks = [
    {
        id: 1,
        text: "your first item",
        done: false,
        important: false
    },
    {
        id: 2,
        text: "your second item",
        done: false,
        important: false
    },
    {
        id: 3,
        text: "your third item",
        done: false,
        important: false
    }
]


const toDoListReducer = (state = tasks, action) => {

    switch (action.type) {
        case ADD_NEW_TASK:
            if (action.payload.text === ""){
                return state
            }
            return [...state, action.payload];
        case MARK_AS_DONE:
            return state.map(task => (task.id === action.payload)
                ? {...task, done: !task.done} : task)
            break;
        case MARK_AS_IMPORTANT:
            return state.map(task =>
                (task.id === action.payload)
                    ? {...task, important: !task.important} : task);
        case DELETE_TASK:
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
        default:
            return state;
    }
}

export default toDoListReducer