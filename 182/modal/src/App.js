import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { CSSTransition, Transition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
    const duration = 500;

    // const defaultStyle = {
    //     transition: `all visibility ${duration}ms ease-in-out`,
    //     opacity: 0,
    //     visibility: 'hidden'
    // }

    // const transitionStyles = {
    //     entering: { opacity: 1, visibility: 'visible' },
    //     entered:  { opacity: 1, visibility: 'visible' },
    //     exiting:  { opacity: 0, visibility: 'hidden' },
    //     exited:  { opacity: 0, visibility: 'hidden' },    
    // };
    
    return (
                   
            <CSSTransition
                in={props.show} 
                timeout={duration}              
                onEnter={() => props.setShowTrigger(false)}
                onExited={() => props.setShowTrigger(true)}
                classNames="modal"
                mountOnEnter
                unmountOnExit>
                    <span>{props.element}</span>
            </CSSTransition> 
        
                   
           
           
        
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);
    const arr = ['SELECT 1', 'SELECT 2', 'SELECT 3', 'SELECT 4', 'SELECT 5', 'SELECT 6'];

    return (
        <Container>
            <ul>
                {
                    arr.map(element => {
                        return (
                            <li>
                                <Modal 
                                    element={element} 
                                    show={showModal} 
                                    onClose={setShowModal} 
                                    setShowTrigger={setShowTrigger}/>
                            </li>
                        )
                    })
                }
            </ul>
            
            
            {
                showTrigger ? 
                    <button 
                        type="button" 
                        className="btn btn-warning mt-5"
                        onClick={() => setShowModal(true)}>
                            Open Modal
                    </button> :
                    null
            }
        </Container>
    );
}

export default App;
