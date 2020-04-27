import React, {Component} from "react";
import {connect} from 'react-redux';
import {TodoListActions} from "../store/actions/actions";
import './add-new-item.css';

class AddNewItem extends Component {

    state = {
        text: ''
    }

    render() {

        const onChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }

        const onSubmit = (e) => {
            e.preventDefault();
            this.props.TodoListActions(this.state.text);
            this.setState({
                text: ''
            })
        }

        return (
            <div className="newItemInput">
                <form className="form-group" onSubmit={onSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="Enter your task and press Enter"
                           value={this.state.text}
                           onChange={onChange}
                    />
                </form>
            </div>
        )
    }
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