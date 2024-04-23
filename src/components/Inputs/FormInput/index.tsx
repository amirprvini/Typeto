import { PropsWithRef , forwardRef, useRef, useState } from "react";
import "./index.css"
import { IoSearchOutline } from "react-icons/io5";

interface IFormInputProps extends React.PropsWithRef<any>{
    title ?: string
    placeHolderStr ?: string ;
    type ?: string ; 
    onchange ?: any ;
    formValue ?: any ;
    inputId ?: string ;
    dynamicWidth ?:any
}

const FormInput : React.FC<IFormInputProps> = forwardRef(function FormInput(
    {type,title,placeHolderStr,onchange,formValue,inputId},ref:any) : JSX.Element {

    const [state,setState] = useState("") ;
    
    return (
        <input ref={ref} type={type} title={title} placeholder={placeHolderStr}
         className="formInput h-8" onChange={onchange} value={formValue} id={inputId} />
    )
})

export default FormInput;