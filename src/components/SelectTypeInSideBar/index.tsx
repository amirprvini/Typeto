import React from 'react'
import TypeInSideBarButton from '../Buttons/TypeInSideBarButton';
import './index.css' ; 

const SelectTypesInSideBar = () => {

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
    <div className='selectTypeWrapper '>

        <div className="selectType">

            <div className="selectTypeTitleWrapper flex justify-center">

                <p className="selectTypeTitle flex justify-center flex-wrap">
                تایپ های شخصیتی    
                </p>

            </div>

            <div className="typesInSideBar">

                <ul className="typesInSideBarList">

                    { personalityTypes.map((type)=>{
                    return <li key={type.id}> <TypeInSideBarButton title={type.title} /> </li>
                    })}

                </ul>
                
            </div>
        </div>
      
    </div>
  )
}

export default SelectTypesInSideBar 
