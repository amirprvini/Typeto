import FamePeopleCard from '../../components/FamePeopleCard'
import './index.css'
import { SideBar } from '../../components/Layout/SideBar'
import {famePeopleData} from "./famePeopleData.js";
import { Axios } from 'axios';
import { AXIOS } from '../../config/axios.config';
import { API_URLS } from '../../constants/api.urls';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArtistCard from '../../components/ArtistCard';


export const FamousPeoplePage : React.FC = () : JSX.Element =>{

    const [state,setState] = useState<any[]>([]) ; 
    
    const fetchArtists = async ()=>{
        const response = await AXIOS.get(API_URLS.GetArtists);
        setState(response.data);
    }

    const navigate  = useNavigate() ; 

    const handleClick = (id:string)=> {

        navigate(`/profile/${id}`);
    }


    useEffect(()=>{
        fetchArtists() ; 
    },[])


    console.log("state: ",state)
    
    return (
        <div className="famousPeoplePage">
        
    
        <div className="content">

        <div className="titleContainer"> <div className="titleWrapper"> <h1 className='title'>افراد معروف</h1> </div> </div>


        <ul className='fmaePeopleList'>
        {state?.map((data)=>{
         return <li> <FamePeopleCard
         onclick={()=>handleClick(data.id)} charName={data.name} career={data.career} charType={data.type} charProfileUrl={data.photoUrl} /></li>
        })}   
            
        </ul>
            
         </div>

        <div className="SideBar"> <ArtistCard/> </div>
        
        
         </div>
    )
}