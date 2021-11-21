import useForm from "../../hooks/useForm";
import './index.css'

const Form = (props)=>{

    const {formValue, setFormValue, formSubmit} = useForm();
    
    

    return(
            <div id="popup-wrapper">
                <form id="popup-content" onSubmit={(event)=>formSubmit(formValue,props.type, event, props.id)}>
                    <p>{props.type==="new"? "Create a task":"Edit a task"}</p>
                    <label for="name">Title</label>
                    <input name="name" className="name" placeholder="Type the title" type="text" defaultValue={props.name} value={formValue.name} onChange={(event)=>setFormValue(previous=>({name:event.target.value, description:previous.description}))}></input>
                    <label for="description">Description</label>
                    <textarea name="description" className="description" placeholder="Type the description" defaultValue={props.description} type="text" value={formValue.description} onChange={(event)=>setFormValue(previous=>({ name:previous.name,description:event.target.value}))}></textarea>
                    <button type="submit">Save</button>
                </form>
            </div>
    )
}


export default Form;