import './index.css';
import editImage from '../../assets/images/edit-todo.png';
import deleteImage from '../../assets/images/delete-todo.png';
import useForm from '../../hooks/useForm';
import Modal from '../modal';
import Form from '../form';
import React from 'react';

const Task = (props) => {
    



    
    

    return(
        <React.Fragment>
        <div className="task">
            <div>
                <h3>{props.name}</h3>
                <div className="task-tools">
                    <button onClick={()=>props.handleClick(props.name, props.description, "edit", props.id)}>
                        <img alt="Edit Task" src={editImage}></img>    
                    </button>
                    <button >
                        <img alt="Delete Task" src={deleteImage}></img>
                    </button>
                </div>
            </div>
            <p>{props.description}</p>
        </div>
        </React.Fragment>
    )
}

export default Task