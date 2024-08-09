import React from 'react'
import { artistType } from '../AddCommentSection'
import FamePeopleCard from '../FamePeopleCard'
import { useNavigate } from 'react-router-dom'

interface SearchResultsProps {
    artistsList : artistType[] 
    setInpState : (str:string)=> void 
    mouseDownProp : any
    displayProp : string 
    setDisplayProp : (str:string) => void 
}
const SearchResults : React.FC<SearchResultsProps> = ({artistsList,setInpState,displayProp,setDisplayProp}) : JSX.Element => {
    
    const navigate = useNavigate();
     
    const handleMouseDown = ()=>{
        
    }

    const handleClick = (id:string)=> {

        setInpState("") ; 
        artistsList.length = 0 ; 
        setDisplayProp('');
        navigate(`/profile/${id}`);

    }

     if(artistsList.length >=1){
        return <div className={`searchResultsWrapper w-[85%] bg-black max-h-60 
        overflow-y-scroll absolute top-0 flex justify-center rounded-sm z-10 ${displayProp}`} onMouseDown={handleMouseDown}>
        
        <ul className='resultsList'>
            {artistsList.map((artist:artistType)=>{
                return <li key={artist.id}>
                    <FamePeopleCard charName={artist.name} charType={artist.type} career={artist.career} 
                    charProfileUrl={artist.photoUrl} id={artist.id} scale={75} onclick={()=>handleClick(artist.id)}/>
                </li>
            })}
        </ul> 

    </div>
     }else{
        return <div></div> 
     }
}

export default SearchResults
