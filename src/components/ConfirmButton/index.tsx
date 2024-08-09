import React from 'react'

interface ConfirmButtonProps {
    title: string ;
    typeProp ?: any
    onclick ?: ()=> void  
    widthProp ?: string
}

const ConfirmButton : React.FC<ConfirmButtonProps> = ({title,typeProp,onclick,widthProp='10'}) : JSX.Element => {
  return (
    <button className={`confirmBtn w-${widthProp} rounded-lg py-2 px-6 bg-black text-white font-semiBold text-lg`} type={typeProp} onClick={onclick}>
        {title}
    </button>
  )
}

export default ConfirmButton
