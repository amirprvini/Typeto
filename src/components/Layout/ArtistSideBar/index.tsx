import React from 'react';
import './index.css' ; 
import SelectTypesInSideBar from '../../SelectTypeInSideBar';
import RelativeProfileCard from '../../RelativeProfileCard';
import { useNavigate, useParams } from 'react-router-dom';
import { UseArtistQuery } from '../../services/queries/useArtistQuery';
import { UseAllArtistQuery } from '../../services/queries/useAllArtistsQuery';
import MoreButton from '../../Buttons/MoreButton';

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

  return (
    <div className="artistSideBar">
        <div className='selectTypesINSideBarContainer'>
            <SelectTypesInSideBar  />
        </div>    

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
