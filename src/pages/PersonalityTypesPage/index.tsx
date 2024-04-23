import { Link } from 'react-router-dom';
import { SideBar } from '../../components/Layout/SideBar';
import PersonalityTypesCard from '../../components/PersonalityTypesCard';
import './index.css' ;
import {personalityTypes} from './PersonalityTypesData'
import { AXIOS } from '../../config/axios.config';
import { API_URLS } from '../../constants/api.urls';
import { useEffect, useState } from 'react';



const PersonalityTypesPage : React.FC = () : JSX.Element =>{

    // const [state,setState] = useState<any[]>([]) ;

    // const fetchPersonalityTypes = async ()=>{
    //     const response = await AXIOS.get(API_URLS.GetPersonalityTypes) ; 
    //     console.log("response: ", response)
    //     // response.setHeader("Access-Control-Allow-Origin", "*");
    //     // response.setHeader("Access-Control-Allow-Credentials", "true");
    //     // response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //     // response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        
    //     setState(response.data);
    // }

    // useEffect(()=>{
    //     fetchPersonalityTypes();
    // },[])

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

    return <div className="personalityTypesPage">
        
        
        <div className="content"> PERSONALITY TYPES

            <div className="typesListWrappwe">

                <div className="titleContainer mb-10"> <div className="titleWrapper"> <h1 className='title'>انواع تایپ های شخصیتی</h1> </div> </div>
            
            <ul className="typesList">
                
           {personalityTypes.map((data)=>{

            return <li key={data.title}> <PersonalityTypesCard typeTitle={data.title}/> </li>

            })}

            </ul>

            </div>
        
        </div>
    
        <div className="SideBar"> <SideBar/> </div>

    </div>

} 

export default PersonalityTypesPage ;