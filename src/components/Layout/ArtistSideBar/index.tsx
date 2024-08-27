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

interface ArtistSideBarProps {
  cardScale?: number
}

const ArtistSideBar : React.FC<ArtistSideBarProps> = ({cardScale=100}) : JSX.Element => {

  const param = useParams() ;
  const {data} = UseArtistQuery(param.id || '') ;
  const AllArtists = UseAllArtistQuery();

    let count = 1 ;
    const FilterArtists = AllArtists.data?.filter((artist)=>{
        if(count <=10 && artist.type === data?.type && artist.id !== data.id){
            count ++ ;
            return artist     
        }
    })
  const navigate = useNavigate();
  const navigateArtist = useNavigate() ;
  const handleClick = ()=>{
        navigate(`/famepeopletypes/${data?.type}`) ; 
        window.scrollTo(0,0);
  }

  const handleArtistCard = (artistID:string)=>{
      navigateArtist(`/profile/${artistID}`)
  }

  return (
    <div className="artistSideBar rounded shadow-2xl">
        <div className="relativeProfilesWrapper">

            <div className="relativeTitleWrapper flex justify-center mb-4 space-x-1 space-y-2">
                <p className="relativeTitle">پروفایل های مرتبط</p>
            </div>

            <ul className='relativeProfilesList w-full flex flex-wrap justify-center gap-4'>
                {FilterArtists?.map((artist)=>{
                    return <li key={artist.id}> 
                    <RelativeProfileCard charName={artist.name} charType={artist.type}
                        career={artist.career} charProfileUrl={artist.photoUrl} 
                        id={artist.id} scaleProp={cardScale} onclick={()=>{handleArtistCard(artist.id)}}/> </li>
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
