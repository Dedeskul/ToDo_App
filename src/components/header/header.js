import React, {useState} from "react";
import './header.css';
import {CSSTransition} from "react-transition-group";
import {Container, Alert} from 'react-bootstrap';
import {markAsImportant} from "../store/actions/actions";
import {connect} from 'react-redux';


const Header = () => {

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const showImportantTasks = () => {
        this.props.markAsImportant(true)
    };

    return (
        <div className="header">
            <div className="headerTytle">
                <h1>Your ToDo App</h1>
            </div>
            <div className="headerImage">
                <Container style={{margin: "3%"}}>
                    {showButton && (
                        <img src={require('../../images/menu.png')}
                             onClick={() => setShowMessage(true)}
                             width="7%"
                        />
                    )}
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                        onEnter={() => setShowButton(false)}
                        onExited={() => setShowButton(true)}
                    >
                        <Alert
                            variant="primary"
                            dismissible
                            onClose={() => setShowMessage(false)}
                        >
                            <Alert.Heading>
                                Choose an Action
                            </Alert.Heading>
                            <ul className="nav-buttons-list">
                                <li>
                                    <button className="btn btn-sm btn-danger"
                                            onClick={showImportantTasks}
                                    >
                                        Important
                                    </button>
                                </li>
                                <li>
                                    <button className="btn btn-sm btn-success">Done</button>
                                </li>
                                <li>
                                    <button className="btn btn-sm btn-dark">Smth</button>
                                </li>
                            </ul>
                        </Alert>
                    </CSSTransition>
                </Container>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    markAsImportant: index => dispatch(markAsImportant(index)),
})

export default connect(undefined, mapDispatchToProps)(Header);