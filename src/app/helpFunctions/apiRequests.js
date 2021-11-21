
// import Form from "../components/form";
// import reactDom from "react-dom";
// import useForm from "../hooks/useForm";
// import useTasks from "../hooks/useTasks";

// export const formSubmit = (formResults, type, event, id) =>{
//     const formManager= useForm();
//     const taskManager=useTasks()


//     event.preventDefault()

//     console.log("submit")
//     if(type === "new"){
//         newTaskSubmit(formResults);
//     }
//     if(type === "edit"){
//         taskEditRequest(formResults, id);
//     }
//         taskManager.getTasksFromApi();        
// }

// export const newTaskSubmit = async (formResults) => {
//     const newTask = {
//         name: formResults.name,
//         description: formResults.description,
//         createdAt: Date.now(),
//         completed: false
//     };

//     let response = await fetch("https://6129ebf1068adf001789b975.mockapi.io/api/tasks",{
//         method:'POST',
//         headers:{
//             'Content Type':'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(newTask)
//     });
//     taskManager.getTasksFromApi();

// };

// export const taskEditRequest = async (formResults, id) =>{

//     const editedTask = {
//         name: formResults.name,
//         description: formResults.description
//     };

//     let response = await fetch(`https://6129ebf1068adf001789b975.mockapi.io/api/tasks/${id}`,{
//         method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(editedTask)
//     });
//     getTasksFromApi();
// }

