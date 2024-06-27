import React, { useState } from 'react'
import './index.css'
import PersonalityTypesCard from '../PersonalityTypesCard';
import MBTIButton from '../Buttons/MBTIButton';
import { IoIosArrowDown } from "react-icons/io";


interface DropDownPros {
    onCompleteDropDown : (mbtiType:string)=> void ; 
    widthProp?: string;
    bgProp ?: string ; 
    justifyProp ?: string ; 
}
const DropDown : React.FC<DropDownPros> = ({onCompleteDropDown,widthProp,bgProp,justifyProp}) :JSX.Element => {


  const [state,setState] = useState<string>('INFP');
    const personalityTypes =  [
    {
      "title": "INFP",
      "id": "0cbb"
    },
    {
      "title": "INTP",
      "id": "0b05"
    },
    {
      "title": "INTJ",
      "id": "a388"
    },
    {
      "title": "INFJ",
      "id": "073d"
    },
    {
      "title": "ENTP",
      "id": "b3a4"
    },
    {
      "title": "ENFP",
      "id": "07e3"
    },
    {
      "title": "ISTP",
      "id": "5a8a"
    },
    {
      "title": "ISFP",
      "id": "815c"
    },
    {
      "title": "ENTJ",
      "id": "4f6d"
    },
    {
      "title": "ENFJ",
      "id": "9967"
    },
    {
      "title": "ISTJ",
      "id": "417b"
    },
    {
      "title": "ESTP",
      "id": "2b28"
    },
    {
      "title": "ESTP",
      "id": "c6c9"
    },
    {
      "title": "ESFP",
      "id": "8269"
    },
    {
      "title": "ESEI",
      "id": "2094"
    },
    {
      "title": "ESTI",
      "id": "04f3"
    }
  ] ;


  const handleClick = ()=>{
    const dropDown = document.querySelector('.dropDowm') ;
    const arrowWrapper = document.querySelector('.arrowWrapper') ;
    dropDown?.classList.toggle('hidden') ;  
    arrowWrapper?.classList.toggle("active") ; 
  }

  const handleSelect = (type:string)=>{
    
    const dropDown = document.querySelector('.dropDowm') ;
    const arrowWrapper = document.querySelector('.arrowWrapper') ;
    dropDown?.classList.toggle('hidden') ;  
    arrowWrapper?.classList.toggle("active") ;  

    setState(type) ; 
  }

  return (
    <div className={`dropDownWrapper flex-col mb-4 w-${widthProp}`}>

        <div className={`tContainer w-full flex justify-${justifyProp} mb-4`}>
            <p className="ttitle text-[1rem]">تایپ شخصیتی خود را انتخاب کنید</p>
        </div>

        <div className="dropDownContainer w-full items-center justify-start">

            <div className={`dropDownTitleWrapper bg-${bgProp} flex space-x-2 w-full px-4 py-2 border-gray border-solid border-[1px] rounded-xl cursor-pointer`} onClick={handleClick} >
                <div className="arrowWrapper transition duration-500 flex justify-center items-center ml-1"><IoIosArrowDown /></div>
                <p className="dropDownTitle">{state}</p>
            </div>
      
            <div className="dropDowm  mb-4 w-full border-gray border-solid border-[1px] rounded-xl px-4 py-2 max-h-44 overflow-y-scroll hidden">

                <ul className="typesList flex flex-col flex-wrap space-x-2 space-y-2 justify-center items-start ">

                    { personalityTypes.map((type)=>{
                        return <li className='w-full' key={type.id}> <MBTIButton typeTitle={type.title} onCompleteButton={(type)=>{
                          onCompleteDropDown(type)
                          console.log('clicked !!!',type) ;
                          handleSelect(type) ; 
                        }}/> </li>
                })}

                </ul>
            </div>

        </div>

    </div>
  )
}

export default DropDown
