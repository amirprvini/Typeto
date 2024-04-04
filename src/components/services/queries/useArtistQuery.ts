import { ReactQueryKeys } from './../keys';
import { API_URLS } from './../../../constants/api.urls';
import { AXIOS } from "../../../config/axios.config"
import {useQuery } from 'react-query';
import { artistProfileType } from '../../context/types/artistProfile.types';
import axios from 'axios';
import { artistType } from '../../AddCommentSection';

// const fetcher = AXIOS.get(API_URLS.GetArtists)
// .then((res)=> {
//     console.log("res.data: ",res.data )
//     return res.data}); 

const fetcher = async (id:string) : Promise<artistType> => {
 return await axios.get(`http://localhost:3000/artists/${id}`).then((res)=>res.data);
}

export const UseArtistQuery = (id:string )=> {

   console.log("fetcher: " , fetcher(id)) ; 
    return useQuery<any,any,artistType,any>({
        queryKey: [ReactQueryKeys.GetArtists,id],
        queryFn: () => fetcher(id)
    }) ; 
};


// export const UseArtistQuery = () => {
//  const { data } = await useQuery(ReactQueryKeys.GetArtists, async () => {
//     return await axios.get('http://localhost:3000/artists/1')
//  })
 
// }