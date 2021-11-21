import { useEffect,useState } from "react";
import useTasks from "./useTasks";

const useForm = () => {
    const [formValue, setFormValue] = useState({})
    const [formLoaded, setFormLoaded] = useState(false)
    const taskManager=useTasks()

    const handleClick = (name, description) =>{
        setFormLoaded(previous=>true)
        setFormValue((previous)=>({name:name, description:description}))
        console.log("click")
    }
    useEffect(()=>{
        console.log(formValue)

    },[formValue])
    useEffect(()=>{
            window.addEventListener('click',function(e){
                if(e.target === document.getElementById("popup-wrapper")){
                    setFormLoaded((previous)=>false)
                }
    })
},[])

const formSubmit = (formResults, type, event, id) =>{



    event.preventDefault()

    console.log("submit")
    if(type === "new"){
        newTaskSubmit(formResults);
    }
    if(type === "edit"){
        taskEditRequest(formResults, id);
    }

        setFormLoaded(previous=>false)
        taskManager.getTasksFromApi();        
}

const newTaskSubmit = async (formResults) => {
    const newTask = {
        name: formResults.name,
        description: formResults.description,
        createdAt: Date.now(),
        completed: false
    };

    let response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/tasks",{
        method:'POST',
        headers:{
            'Content Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(newTask)
    });

};

const taskEditRequest = async (formResults, id) =>{

    const editedTask = {
        name: formResults.name,
        description: formResults.description
    };

    let response = await fetch(`https://6129ebf1068adf001789b975.mockapi.io/api/tasks/${id}`,{
        method: 'PUT',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(editedTask)
    });


}


    useEffect(()=>{
        console.log(formLoaded)
    },[formLoaded])
    return {
        formValue,
        setFormValue,
        handleClick,
        formLoaded,
        formSubmit
    }
}


export default useForm;