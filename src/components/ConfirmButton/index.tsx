import React from 'react'
import './index.css'


interface ConfirmButtonProps {
    title: string ;
    typeProp ?: any
    onclick ?: ()=> void  
}

const ConfirmButton : React.FC<ConfirmButtonProps> = ({title,typeProp,onclick}) : JSX.Element => {
  return (
    <button className='confirmBtn' type={typeProp} onClick={onclick}>
        {title}
    </button>
  )
}

export default ConfirmButton
