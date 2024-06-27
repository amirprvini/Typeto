import React from 'react'
import './index.css'


interface ConfirmButtonProps {
    title: string ;
    typeProp ?: any
    onclick ?: ()=> void  
    widthProp ?: string
}

const ConfirmButton : React.FC<ConfirmButtonProps> = ({title,typeProp,onclick,widthProp}) : JSX.Element => {
  return (
    <button className={`confirmBtn w-${widthProp}`} type={typeProp} onClick={onclick}>
        {title}
    </button>
  )
}

export default ConfirmButton
