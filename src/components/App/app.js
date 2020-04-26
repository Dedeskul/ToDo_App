import React from "react";
import Header from "../header/header";
import ToDoList from "../todo-list/todo-list";
import AddNewItem from "../add-new-item/add-new-item";
import './app.css';

const App = () => {
    return (
        <div className="App">
            <div className="mainConteiner">
                <Header/>
                <AddNewItem/>
                <ToDoList/>
            </div>

        </div>
    )
}

export default App;