import React from 'react'
import './index.css' ; 

interface TextInputProps {
    lable?: string ;
    title?: string ; 
    placeHolderStr ?: string ; 
    type?: string ; 

}

const TextInput : React.FC<TextInputProps> = ({lable,title,placeHolderStr,type}) :JSX.Element => {
  return (
    <div className='textInputWrapper'>

        <div className='textInputContainer'>

            <div className="lableWrapper">
                <p className="lable">{lable}</p>
            </div>

            <input className='userTextInput' type={type} placeholder={placeHolderStr} />

        </div>
      
    </div>
  )
}

export default TextInput
