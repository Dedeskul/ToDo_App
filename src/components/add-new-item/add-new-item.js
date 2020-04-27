import React, {useState} from "react";
import {connect} from 'react-redux';
import {TodoListActions} from "../store/actions/actions";
import './add-new-item.css';

const AddNewItem = ({TodoListActions}) => {

    const [text, setText] = useState('');

        const onChange = (e) => {
            setText(e.target.value)
        }

        const onSubmit = (e) => {
            e.preventDefault();
            TodoListActions(text);
            setText('');
        }

        return (
            <div className="newItemInput">
                <form className="form-group" onSubmit={onSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter your task and press Enter"
                           value={text}
                           onChange={onChange}
                    />
                </form>
            </div>
        )
}

const mapStateToProps = ({tasks}) => {
    return {
        tasks
    }
}

const mapDispatchToProps = {
    TodoListActions
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);