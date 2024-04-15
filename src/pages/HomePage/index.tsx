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
import { UseAllArtistQuery } from '../../components/services/queries/useAllArtistsQuery'
import { artistType } from '../../components/AddCommentSection'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArtistCard from '../../components/ArtistCard'
let counter = 1; 
let typesCounter = 1; 


export const HomePage : React.FC = () : JSX.Element =>{

    const user = useContext(AppContext);
    const [state,setState] = useState(false);
    const [types,setTypes] = useState<any[]>([]) ;
    const {data} = UseAllArtistQuery() ;  

    const handleQusetionBox = ()=>{
        setState(true) ;
    }

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

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const Artist = data?.map((fame)=>{
                          return <ArtistCard  charName={fame.name} charType={fame.type}
                          career={fame.career}  charProfileUrl={fame.photoUrl} onclick={()=>{handleClick(fame.id)}}/>
                        })


    return (
        <div className="homePage">
        
        <div className="content"> 

        <div className="showFamePeople"> 


            <div className="titleContainer mb-10 w-[90%]">
                 <div className="titleWrapper"> <h2 className='title'>افراد معروف</h2> </div> </div>
            
            <div className="famePeopleWrapper">

                {/* <ul className="famePeopleList">
                    
                    {data?.map((fame)=>{

                      if(counter <= 8 ){
                        counter ++ ;
                        return <ArtistCard  charName={fame.name} charType={fame.type}
                        career={fame.career}  charProfileUrl={fame.photoUrl} onclick={()=>{handleClick(fame.id)}}/>
                      }
                        })}                  

                </ul> */}


                <Carousel  responsive={responsive}>{Artist}</Carousel>




                <div className="moreButtonWrapper">
                    <Link to={"/famouspeople"}> <MoreButton /></Link>
                </div>

            </div>
        

        
        </div>



        <div className="showTypes"> 


            <div className="titleContainer mb-10 w-[90%]">
              <div className="titleWrapper w-[40%]"> <h2 className='title'>تایپ های شخصیتی</h2> </div>    
            </div>
            
            <div className="typesWrapper">

                <ul className="typesList">
                    
                    {personalityTypes.map((type)=>{
                        
                        // if(typesCounter <=6 ){
                        // typesCounter ++ ;
                        // return <PersonalityTypesCard typeTitle={type.title} />} 

                        return <PersonalityTypesCard typeTitle={type.title} />
                        
                        })}

                </ul>

                <div className="moreButtonWrapper">
                    <Link to={"/personalitytypes"}> <MoreButton /></Link>
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