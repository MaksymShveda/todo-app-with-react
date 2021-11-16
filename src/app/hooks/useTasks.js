import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useTasks = (tasks) =>{
    const [tasksData, setTasksData] = useState(tasks)
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getTasksFromApi = async()=>{
            const response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/tasks");
            const result = await response.json();
            await setTasksData(previous=>result);
            await setLoading(previous=>true)
        }
        getTasksFromApi();
    
    },[])


    return {
        tasksData,
        setTasksData,
        loading
    }
}


export default useTasks