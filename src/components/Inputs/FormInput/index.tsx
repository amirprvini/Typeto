import {forwardRef, useState } from "react";
import "./index.css"

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
    
    return (
        <input ref={ref} type={type} title={title} placeholder={placeHolderStr}
         className="formInput h-8" onChange={onchange} value={formValue} id={inputId} />
    )
})

export default FormInput;