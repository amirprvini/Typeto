import { useContext, useEffect, useState } from 'react'
import FamePeopleCard from '../../components/FamePeopleCard'
import { SideBar } from '../../components/Layout/SideBar'
import QuestionBox from '../../components/QuestionBox'
import './index.css'
import {QAData} from './Q_AData'
import { famePeopleData } from '../FamousPeoplePage/famePeopleData'
// import { personalityTypes } from '../PersonalityTypesPage/PersonalityTypesData'
import MoreButton from '../../components/Buttons/MoreButton'
import { Link, useNavigate } from 'react-router-dom'
import PersonalityTypesCard from '../../components/PersonalityTypesCard'
import { API_URLS } from '../../constants/api.urls'
import { AXIOS } from '../../config/axios.config'
import { AppContext } from '../../components/context/store'
let counter = 1; 
let typesCounter = 1; 

export const HomePage : React.FC = () : JSX.Element =>{

    const user = useContext(AppContext);
    const [state,setState] = useState(false);
    const [types,setTypes] = useState<any[]>([]) ;
    const [artist,setArtist] = useState<any[]>([]) ; 

    const handleQusetionBox = ()=>{
        setState(true) ;
    }

    // const fetchPersonalityTypes = async ()=>{
    //     const response = await AXIOS.get(API_URLS.GetPersonalityTypes) ; 
    //     setTypes(response.data);
    // }

    const fetchArtists = async ()=>{
      // const token = localStorage.getItem('access');
      // console.log("token in home page: ",token)
      // AXIOS.defaults.headers.common.Authorization = `Bearer ${token}`

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };

        const response = await AXIOS.get(API_URLS.GetArtists,config);
        setArtist(response.data);
    }


    useEffect(()=>{
        // fetchPersonalityTypes();
        fetchArtists() ;
        console.log("user in home" , user)
    },[])

  
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

    const navigate = useNavigate(); 
    const handleClick = (id:string)=>{
        navigate(`/profile/${id}`)
    }

    return (
        <div className="homePage">
        
        <div className="content"> 


            <div className="showTypes"> 


            <div className="titleContainer mb-10 w-[90%]">
                 <div className="titleWrapper w-[40%]"> <h2 className='title'>تایپ های شخصیتی</h2> </div> </div>
            
            <div className="typesWrapper">

                <ul className="typesList">
                    
                    {personalityTypes.map((type)=>{
                        if(typesCounter <=6 ){
                        return <PersonalityTypesCard typeTitle={type.title} />} 
                        typesCounter ++ ;
                        })}

                </ul>

                <div className="moreButtonWrapper">
                    <Link to={"/personalitytypes"}> <MoreButton /></Link>
                </div>

            </div>
        

        
        </div>




        <div className="showFamePeople"> 


            <div className="titleContainer mb-10 w-[90%]">
                 <div className="titleWrapper"> <h2 className='title'>افراد معروف</h2> </div> </div>
            
            <div className="famePeopleWrapper">

                <ul className="famePeopleList">
                    
                    {artist.map((fame)=>{
                        if(counter <=8 ){
                        
                        counter ++ ;
                        return <FamePeopleCard  charName={fame.name} charType={fame.type}
                        career={fame.career}  charProfileUrl={fame.photoUrl} onclick={()=>{handleClick(fame.id)}}/>
                        
                        }})}

                </ul>

                <div className="moreButtonWrapper">
                    <Link to={"/famouspeople"}> <MoreButton /></Link>
                </div>

            </div>
        

        
        </div>
        
        

        <div className="qListWrappwe">

            <div className="titleContainer mb-10"> <div className="titleWrapper"> <h2 className='title'>پرسش و پاسخ</h2> </div> </div>
            <ul className="questionList">
                
           {QAData.map((data)=>{

            return <li> <QuestionBox Qestion={data.qusetion} Answer={data.answer} /> </li>

            })}

            </ul>
        </div>
        
        </div>

        <div className="SideBar"> <SideBar/> </div>
    
         </div>
    )
}