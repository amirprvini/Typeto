import { useContext,useEffect} from 'react'
import QuestionBox from '../../components/QuestionBox'
import './index.css'
import {QAData} from './Q_AData'
import MoreButton from '../../components/Buttons/MoreButton'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../components/context/store'
import { UseAllArtistQuery } from '../../components/services/queries/useAllArtistsQuery'
import Slider from "react-slick";
import ArtistCard from '../../components/ArtistCard'
import TypeSection from '../../components/TypeSection'
import { SentinelsTypes, analystsTypes, diplomatsTypes, explorersTypes } from '../../components/TypeSection/typeSecData'


export const HomePage : React.FC = () : JSX.Element =>{

    const user = useContext(AppContext);
    const {data} = UseAllArtistQuery() ;  

    const navigate = useNavigate(); 
    const handleClick = (id:string)=>{
        navigate(`/profile/${id}`)
    }

    useEffect(()=>{
      console.log('user changed in use Context !!!')
    },[user])

  var settings = {
    // dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    // autoplaySpeed: 4000,
    pauseOnHover: true,
    // centerMode: true,
    // centerPadding: "60px",
    // swipeToSlide: true,
    // rtl: true ,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
      ,
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
      ,
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

        const Artist = data?.map((fame)=>{
          return <ArtistCard  charName={fame.name} charType={fame.type}
          career={fame.career}  charProfileUrl={fame.photoUrl} onclick={()=>{handleClick(fame.id)}}/>
              })
        
                        const handleSliders = ()=>{
                          const artistSlider = document.querySelector('.famePeopleWrapper')?.firstElementChild;
                          artistSlider?.classList.toggle('artistSlider');

                          const typesSlider = document.querySelector('.typesWrapper')?.firstElementChild;
                          artistSlider?.classList.toggle('typesSlider');
                        }

                        handleSliders() ; 

                        const handleButtons = ()=>{
                          const nextButton = document.querySelector('.slick-prev')
                          const prevButton = document.querySelector('.slick-next')

                          nextButton?.classList.toggle('slick-prev')
                          nextButton?.classList.toggle('slick-next')

                          prevButton?.classList.toggle('slick-next')
                          prevButton?.classList.toggle('slick-prev')
                          
                        }

                        handleButtons() ; 

    return (
        <div className="homePage">
        
        <div className="content"> 

        <div className="showFamePeople"> 


            <div className="titleContainer mb-1 w-[100%] sm:w-[90%]">
                 <div className="titleWrapper py-2 w-[100%] text-6xl sm:w-2/3 lg:w-1/3"> <h2 className='title flex flex-wrap'>افراد معروف</h2> </div> </div>
            
            <div className="famePeopleWrapper">

                <Slider {...settings}> {Artist} </Slider>

                <div className="moreButtonWrapper">
                    <Link to={"/famouspeople"}> <MoreButton /></Link>
                </div>

            </div>
        

        
        </div>



        <div className="showTypes"> 


            <div className="titleContainer mb-10 w-[100%] sm:w-[90%]">
              <div className="titleWrapper py-2 text-6xl sm:w-2/3 lg:w-1/3"> <h2 className='title w-max flex flex-wrap'>تایپ های شخصیتی</h2> </div>    
            </div>
            
            <div className="typesWrapper flex flex-col items-center">

                <TypeSection typeSectionTitle='تحلیلگران' types={analystsTypes} />
                <TypeSection typeSectionTitle='دیپلمات' types={diplomatsTypes} />
                <TypeSection typeSectionTitle='نگهبانان' types={SentinelsTypes} />
                <TypeSection typeSectionTitle='کاشفان' types={explorersTypes} />

            </div>
        
          </div>


        <div className="qListWrappwe">

            <div className="titleContainer mb-10 w-[90%]"> <div className="titleWrapper"> <h2 className='title w-max'>پرسش و پاسخ</h2> </div> </div>
            <ul className="questionList">
                
           {QAData.map((data)=>{

            return <li> <QuestionBox Qestion={data.qusetion} Answer={data.answer} /> </li>

            })}

            </ul>
        </div>
        
        </div>

         </div>
    )
}