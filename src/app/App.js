import useTasks from "./hooks/useTasks";
import React from "react";
import Task from "./components/task";
import './App.css'


const App = ()=>{
    const tasks = useTasks();
  return(
        <React.Fragment>
            <div id="app">
                <header>
                    <h1>To Do</h1>
                    <button></button>
                </header>
                <div id="tasks-wrapper">
                    {!tasks.loading ? (<p>Loading</p>) :(tasks.tasksData.map((task)=><Task task={task}/>))}
                </div>
            </div>
        </React.Fragment>

  )
}


export default App;