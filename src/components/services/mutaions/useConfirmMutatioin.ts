import { useMutation } from "react-query"
import { IUserState } from "../../context/types/context.types"
import axios from "axios"
import { ReactQueryKeys } from "../keys"

export const UseConfirmUserMutaion = (userID:string)=>{
    return useMutation({
        mutationFn:(data:IUserState)=>axios.put(`http://localhost:3000/users/${userID}`,data)
        .then((res)=>res.data) , 
        mutationKey: ReactQueryKeys.ConfirmUser

    })
}