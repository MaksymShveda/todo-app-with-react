import './index.css';
import editImage from '../../assets/images/edit-todo.png';
import deleteImage from '../../assets/images/delete-todo.png';
import useForm from '../../hooks/useForm';
import Modal from '../modal';
import Form from '../form';
import React from 'react';

const Task = ({task}) => {
    
    const formState = useForm()

    
    

    return(
        <React.Fragment>
        <div className="task">
            <div>
                <h3>{task.name}</h3>
                <div className="task-tools">
                    <button onClick={()=>formState.handleClick(task.name, task.description)}>
                        <img alt="Edit Task" src={editImage}></img>    
                    </button>
                    <button >
                        <img alt="Delete Task" src={deleteImage}></img>
                    </button>
                </div>
            </div>
            <p>{task.description}</p>
        </div>
        {formState.formLoaded===true ? (<Modal><Form name={task.name} description={task.description} type="edit" id={task.id}/></Modal>) : null }
        </React.Fragment>
    )
}

export default Task