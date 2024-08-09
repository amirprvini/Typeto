import { useQuery } from "react-query"
import { IUserState } from "../../context/types/context.types"
import axios from "axios"
import { ReactQueryKeys } from "../keys"

const fetchUser = async(id:string): Promise<IUserState> =>{
    return await axios.get(`http://localhost:3000/users/${id}`).then((res)=>res.data)
} 

export const UseGetUserQuery = (userId:string)=>{
    console.log('fetch User: ' , fetchUser(userId))
    return useQuery<any,any,IUserState,any>({
        queryKey:[ReactQueryKeys.GetUser,userId],
        queryFn:()=> fetchUser(userId)
    })
}