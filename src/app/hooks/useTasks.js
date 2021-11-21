import { useState } from "react";
import { useEffect } from "react/cjs/react.development";



const useTasks = () =>{
    const [tasksData, setTasksData] = useState({})
    const [isLoaded, setLoaded] = useState(false);

    const getTasksFromApi = async()=>{
        setLoaded(previous=>false)
        const response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/tasks");
        const result = await response.json();
        setTasksData(previous=>result)
        setLoaded(previous=>true)
    };

    useEffect(()=>{
console.log("render")
       getTasksFromApi()
        
    },[])


    return {
        tasksData,
        setTasksData,
        isLoaded,
        getTasksFromApi
    }
}


export default useTasks