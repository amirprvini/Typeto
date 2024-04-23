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

import Slider from "react-slick";
import ArtistCard from '../../components/ArtistCard'
import MBTICard from '../../components/MBTICard'
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
      "typeDescription":"ایده آل گرا",
      "id": "0cbb"
    },
    {
      "title": "INTP",
      "typeDescription":"ایده آل گرا",
      "id": "0b05"
    },
    {
      "title": "INTJ",
      "typeDescription":"ایده آل گرا",
      "id": "a388"
    },
    {
      "title": "INFJ",
      "typeDescription":"ایده آل گرا",
      "id": "073d"
    },
    {
      "title": "ENTP",
      "typeDescription":"ایده آل گرا",
      "id": "b3a4"
    },
    {
      "title": "ENFP",
      "typeDescription":"ایده آل گرا",
      "id": "07e3"
    },
    {
      "title": "ISTP",
      "typeDescription":"ایده آل گرا",
      "id": "5a8a"
    },
    {
      "title": "ISFP",
      "typeDescription":"ایده آل گرا",
      "id": "815c"
    },
    {
      "title": "ENTJ",
      "typeDescription":"ایده آل گرا",
      "id": "4f6d"
    },
    {
      "title": "ENFJ",
      "typeDescription":"ایده آل گرا",
      "id": "9967"
    },
    {
      "title": "ISTJ",
      "typeDescription":"ایده آل گرا",
      "id": "417b"
    },
    {
      "title": "ESTP",
      "typeDescription":"ایده آل گرا",
      "id": "2b28"
    },
    {
      "title": "ESTP",
      "typeDescription":"ایده آل گرا",
      "id": "c6c9"
    },
    {
      "title": "ESFP",
      "typeDescription":"ایده آل گرا",
      "id": "8269"
    },
    {
      "title": "ESEI",
      "typeDescription":"ایده آل گرا",
      "id": "2094"
    },
    {
      "title": "ESTI",
      "typeDescription":"ایده آل گرا",
      "id": "04f3"
    }
  ] ; 

    const navigate = useNavigate(); 
    const handleClick = (id:string)=>{
        navigate(`/profile/${id}`)
    }

 var typeSettings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "60px",
    // swipeToSlide: true,
    // rtl: true ,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "60px",
    // swipeToSlide: true,
    // rtl: true ,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

        const Artist = data?.map((fame)=>{
          return <ArtistCard  charName={fame.name} charType={fame.type}
          career={fame.career}  charProfileUrl={fame.photoUrl} onclick={()=>{handleClick(fame.id)}}/>
              })
        
        const mbtiType = personalityTypes.map((type)=>{
                        return <MBTICard typeTitle={type.title} faDescription={type.typeDescription} />
                        })

    return (
        <div className="homePage">
        
        <div className="content"> 

        <div className="showFamePeople"> 


            <div className="titleContainer mb-10 w-[90%]">
                 <div className="titleWrapper"> <h2 className='title'>افراد معروف</h2> </div> </div>
            
            <div className="famePeopleWrapper">

                <Slider {...settings}> {Artist} </Slider>

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

                {/* <ul className="typesList">
                    
                    {personalityTypes.map((type)=>{
                        
                        return <MBTICard typeTitle={type.title} faDescription={type.typeDescription} />
                
                        })} 

                  

                </ul> */}

                <Slider {...typeSettings}> {mbtiType} </Slider>

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

        {/* <div className="SideBar"> <SideBar/> </div> */}
    
         </div>
    )
}