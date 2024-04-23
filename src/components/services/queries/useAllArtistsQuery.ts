import { useQuery } from "react-query"
import { ReactQueryKeys } from "../keys"
import axios from "axios"
import { AXIOS } from "../../../config/axios.config"
import { API_URLS } from "../../../constants/api.urls"
import { artistType } from "../../AddCommentSection"


const fetchAllArtists = async () : Promise<artistType[]> => {
    return await axios.get('http://localhost:3000/artists').then((res)=>res.data);
} 


export const UseAllArtistQuery = () =>{
    return useQuery<any,any,artistType[],any>({
        queryKey: ReactQueryKeys.GetAllArtists , 
        queryFn:fetchAllArtists 
    })
}