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
        console.log("stateProp[before]: ",stateProp)
        setStatePropFunc("")
        console.log("stateProp[after]: ",stateProp)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log('search input: ' , e.target.value.toLowerCase())
        const getAllArtist = AXIOS.get(API_URLS.GetArtists).then((res)=>res.data)
        .then((res)=>{
            const filter = (e.target.value.length === 0) ? [] : res.filter((data:artistType)=>{                    
                if(data.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                    || data.faName.includes(e.target.value))
                    return data ;
            })
            
            onComplete(filter) ; 
        })
       
        console.log('all Artists: '  , getAllArtist) ; 
        setStatePropFunc(e.target.value)
        console.log('e.target.value: ' , e.target.value) ; 
        console.log('state Prop in handle Change: ' , stateProp) ; 
    }

    const handleMouseDown = ()=>{
        console.log('mouse Down event raised !!!') ;
        // setDisplayProp('')
        // setMouseDownProp(true) 
    }

    
    const handleMouseOut = ()=>{
        console.log('mouse Out event raised !!!') ;
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