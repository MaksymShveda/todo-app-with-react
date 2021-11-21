import reactDom from "react-dom"
import { useEffect } from "react"


const Modal = (props)=>{
    useEffect(()=>{
        document.getElementById("root").appendChild(document.createElement("div"))
    },[])
    return reactDom.createPortal(
        props.children, document.getElementById("root")
    )
}


export default Modal