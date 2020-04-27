import {combineReducers} from "redux";
import toDoListReducer from "./todo-list-reducer";
import filterReducer from "./filterReducer";

const allReducers = combineReducers({
    tasks: toDoListReducer,
    filter: filterReducer
})

export default allReducers;