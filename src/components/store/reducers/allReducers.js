import {combineReducers} from "redux";
import toDoListReducer from "./todo-list-reducer";

const allReducers = combineReducers({
    tasks: toDoListReducer
})

export default allReducers;