import React from 'react'
import './index.css'


interface DropDownPros {}
const DropDown : React.FC<DropDownPros> = () :JSX.Element => {
  return (
    <div className='dropDownWrapper'>

        <div className="dropDownContainer">

            <div className="dropDownTitle">
            تایپ شخصیتی
        </div>
      
        <div className="dropDowm">
            <select name="mbtiDropDown" id="mbtiDropDown">
                <option value="infj" >INFJ</option>
                <option value="intp">INTP</option>
            </select>
        </div>
        
        </div>

    </div>
  )
}

export default DropDown
