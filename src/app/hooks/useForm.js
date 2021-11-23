import { useEffect,useState } from "react";
import useTasks from "./useTasks";

const useForm = () => {
    const [formValue, setFormValue] = useState({})
    const [formLoaded, setFormLoaded] = useState(false)
    const taskManager=useTasks()

    const handleClick = (name, description, type, id) =>{
        setFormLoaded(previous=>true)
        setFormValue((previous)=>({name:name, description:description, type:type}))
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

const formSubmit = (name, description,event, id, type) =>{

console.log(formValue)

    event.preventDefault()

    console.log("submit")
    if(type === "new"){
        newTaskSubmit(name, description);
    }
    if(type === "edit"){
        taskEditRequest(formValue, id);
    }
        taskManager.getTasksFromApi();        
}

const newTaskSubmit = async (name, description) => {
    console.log(formValue)
    let newTask = {
        createdAt: Date.now(),
        name: "sss",
        description: "ssaqqq",
        completed: false
    };

    let response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/tasks",{
        method:'POST',
        headers:{
            'Content Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(newTask)
    });
    await setFormLoaded(previous=>false)

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