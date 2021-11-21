import useTasks from "./hooks/useTasks";
import React from "react";
import Task from "./components/task";
import './App.css'
import addImage from './assets/images/add-todo.png'
import Modal from "./components/modal";
import Form from "./components/form";
import useForm from "./hooks/useForm";

const App = ()=>{
    const tasks = useTasks();
    const taskForm = useForm();

  return(
        <React.Fragment>
            <div id="app">
                <header>
                    <h1>To Do</h1>
                    <button onClick={()=>taskForm.handleClick("","")}>
                        <img alt="Add new task" src={addImage}></img>
                    </button>
                </header>
                <div id="tasks-wrapper">
                    {!tasks.isLoaded ? (<p>Loading</p>) :(tasks.tasksData.map((task)=><Task key={task.id} task={task}/>))}
                </div>
            </div>
            {taskForm.formLoaded===true? (<Modal><Form name="" description="" type="new"/></Modal>):null}
        </React.Fragment>

  )
}


export default App;