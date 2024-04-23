import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";


interface AddButtonProps {
    onclick ?: ()=> void  ; 
}
const AddButton:React.FC<AddButtonProps> = ({onclick}) : JSX.Element => {
  
    const [state,setState] = useState(null) ; 
  
    // const handleChange = ()=>{
    //     setState(URL.createObjectURL(event.target.files[0]))
    // }

    return (
        <div className="addButton">
        {/* <IoIosAddCircle /> */}
        {/* <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setState(event.target.files[0]);
        }}
      />
       */}
        </div>
  )
}

export default AddButton
 