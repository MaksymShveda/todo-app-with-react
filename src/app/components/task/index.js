

const Task = ({task}) => {
    const editTask = ()=>{
        console.log("edit")
    }

    const deleteTask = ()=>{
        console.log("delete")
    }

    return(
        <div key={task.id}>
            <div>
                <h3>{task.name}</h3>
                <div className="task-tools">
                    <button onClick={()=>editTask(task)}>
                        <img alt="Edit Task"></img>    
                    </button>
                    <button onClick={()=>deleteTask(task)}>
                        <img alt="Delete Task"></img>
                    </button>
                </div>
            </div>
            <p>{task.description}</p>
        </div>
    )
}

export default Task