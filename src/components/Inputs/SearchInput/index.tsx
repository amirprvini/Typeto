import {forwardRef, useRef, useState} from 'react' ;
import "./index.css"
import { IoSearchOutline } from "react-icons/io5";
import { UseAllArtistQuery } from '../../services/queries/useAllArtistsQuery';
import { AXIOS } from '../../../config/axios.config';
import { API_URLS } from '../../../constants/api.urls';
import { equal } from 'assert';
import { artistType } from '../../AddCommentSection';

interface ISearchInput extends React.PropsWithRef<any>{
    onComplete : (artists:artistType[]) => void 
    funcClick ?: ()=> void
    stateProp : any 
    setStatePropFunc : (str:string)=> void
}
const SearchInput : React.FC<ISearchInput> = ({onComplete,stateProp,setStatePropFunc},ref:any):JSX.Element =>{

    const handleClick = ()=>{
        setStatePropFunc("")
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const getAllArtist = AXIOS.get(API_URLS.GetArtists).then((res)=>res.data)
        .then((res)=>{
            
            const filter = (e.target.value.length === 0) ? [] : res.filter((data:artistType)=>{
                if(data.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                    || data.faName.includes(e.target.value))
                    return data ;

            })
            
            onComplete(filter) ; 
        })
       
        setStatePropFunc(e.target.value)
    }

    const handleMouseDown = ()=>{
        // setDisplayProp('')
        // setMouseDownProp(true) 
    }

    
    const handleMouseOut = ()=>{
        // setDisplayProp('hidden')
        // setMouseDownProp(false) 
    }

    return (

    <div className="searchInputWrapper">
        <input type="text" placeholder="جستجو کنید ..." className="searchInput" onChange={handleChange} value={stateProp} onMouseDown={handleMouseDown} onMouseOut={handleMouseOut}/>
        <button className="searchIcon" onClick={handleClick} ><IoSearchOutline /></button>
    </div>

    )
}

export default SearchInput;