import React from 'react'
import './index.css'
import PersonalityTypesCard from '../PersonalityTypesCard';
import MBTIButton from '../Buttons/MBTIButton';


interface DropDownPros {
    onCompleteDropDown : (mbtiType:string)=> void ; 
}
const DropDown : React.FC<DropDownPros> = ({onCompleteDropDown}) :JSX.Element => {

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

  return (
    <div className='dropDownWrapper'>

        <div className="dropDownContainer">

            <div className="dropDownTitle px-8">
             *تایپ شخصیتی خود را انتخاب کنید
            </div>
      
        <div className="dropDowm">

            <ul className="typesList">

                { personalityTypes.map((type)=>{
                    return <li className='w-[12%] flex justify-center' key={type.id}> <MBTIButton typeTitle={type.title} onCompleteButton={(type)=>{
                      onCompleteDropDown(type)
                    }}/> </li>
            })}

            </ul>
        </div>

        </div>

    </div>
  )
}

export default DropDown
