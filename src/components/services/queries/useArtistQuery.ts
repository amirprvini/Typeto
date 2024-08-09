import { ReactQueryKeys } from './../keys';
import {useQuery } from 'react-query';
import axios from 'axios';
import { artistType } from '../../AddCommentSection';

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
