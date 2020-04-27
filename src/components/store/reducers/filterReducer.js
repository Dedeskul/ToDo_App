import {SHOW_ALL_DONE_TASKS, SHOW_ALL_IMPORTANT_TASKS, SHOW_ALL_TASKS} from "../actions/actions-description";

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case
        SHOW_ALL_IMPORTANT_TASKS: {
            return action.type
        }

        case
        SHOW_ALL_DONE_TASKS:
            return action.type
        case
        SHOW_ALL_TASKS:
            return '';
        default:
            return state
    }
}

export default filterReducer;