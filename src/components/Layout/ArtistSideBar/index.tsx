import React from 'react';
import './index.css' ; 
import SelectTypesInSideBar from '../../SelectTypeInSideBar';
import RelativeProfileCard from '../../RelativeProfileCard';
import { useNavigate, useParams } from 'react-router-dom';
import { UseArtistQuery } from '../../services/queries/useArtistQuery';
import { UseAllArtistQuery } from '../../services/queries/useAllArtistsQuery';
import MoreButton from '../../Buttons/MoreButton';
import MBTICard from '../../MBTICard';
import Slider from 'react-slick';
import DropDown from '../../MBTIDropDown';

const ArtistSideBar = () => {

  const param = useParams() ;
  console.log('param in relative Profiles: ' , param.id) ;

  const {data} = UseArtistQuery(param.id || '') ;
  
  console.log('this Artist: ' , data) ; 

  const AllArtists = UseAllArtistQuery();

    let count = 1 ;
    const FilterArtists = AllArtists.data?.filter((artist)=>{
        if(count <=10 && artist.type === data?.type){
            count ++ ;
            return artist     
        }
    })

  console.log('filter Artists: ' , FilterArtists);

  const navigate = useNavigate();
  const handleClick = ()=>{
        navigate(`/famepeopletypes/${data?.type}`) ; 
  }

  var settings = {
    // dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    // autoplay: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
      ,
      // {
      //   breakpoint: 585,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     centerMode: false,
      //   }
      // }
      // ,
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

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

          const mbtiType = personalityTypes.map((type)=>{
                        return <MBTICard typeTitle={type.title} faTitle={type.typeDescription} />
                        })

  return (
    <div className="artistSideBar">

        <div className='selectTypesINSideBarContainer px-2 w-full flex justify-center'>
            {/* <SelectTypesInSideBar  /> */}
            <DropDown onCompleteDropDown={(type)=>{
              console.log('type: ',type) ;
            }} widthProp='4/5' bgProp='black' justifyProp='center'/>
        </div>    

        {/* <div className="showTypes"> 

            <div className="titleContainer mb-10 w-[100%] sm:w-[90%]">
              <div className="titleWrapper py-2 w-[100%] text-6xl sm:w-2/3 lg:w-1/3"> <h2 className='title flex flex-wrap'>تایپ های شخصیتی</h2> </div>    
            </div>
            
            <div className="typesWrapper">

                <Slider {...settings}> {mbtiType} </Slider>

            </div>
        
        </div> */}


        <div className="relativeProfilesWrapper">

            <div className="relativeTitleWrapper flex justify-center">
                <p className="relativeTitle">پروفایل های مرتبط</p>
            </div>

            <ul className='relativeProfilesList'>
                {FilterArtists?.map((artist)=>{
                    return <li key={artist.id}> 
                    <RelativeProfileCard charName={artist.name} charType={artist.type}
                        career={artist.career} charProfileUrl={artist.photoUrl} 
                        id={artist.id}/> </li>
                })}
            </ul>

            <div className="moreButtonWrapper w-full flex justify-center">
                <MoreButton onClickFunc={handleClick}/>
            </div>
        </div>
    </div>
  )
}

export default ArtistSideBar;
