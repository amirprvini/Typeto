import React from 'react'
import './index.css' ; 

interface TextInputProps {
    lable?: string ;
    title?: string ; 
    placeHolderStr ?: string ; 
    type?: string ; 
    onchange ?: any ;
    inputValue ?: any ; 
    inputId ?: string ; 
}

const TextInput : React.FC<TextInputProps> = ({lable,title,placeHolderStr,type
  ,onchange,inputValue,inputId}) :JSX.Element => {
  return (
    <div className='textInputWrapper'>

        <div className='textInputContainer'>

            <div className="lableWrapper">
                <p className="lable">{lable}</p>
            </div>

            <input className='userTextInput' type={type} placeholder={placeHolderStr}
             onChange={onchange} value={inputValue} id={inputId} />

        </div>
      
    </div>
  )
}

export default TextInput
