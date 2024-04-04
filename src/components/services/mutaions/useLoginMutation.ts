import { ReactQueryKeys } from './../keys';
import { useMutation } from "react-query"
import { AXIOS } from "../../../config/axios.config";
import { API_URLS } from "../../../constants/api.urls";
import { loginRequest, loginResponse } from "../../../types/api.types";
import { IUserState } from '../../context/types/context.types';

const fetcher = (data:IUserState):Promise<IUserState> =>
    AXIOS.post(API_URLS.Users,data).then((res)=>res.data);


export const UseLoginMutation = ()=>{
    return useMutation<IUserState,any,IUserState,any>(fetcher,{
        mutationKey:ReactQueryKeys.Login  
    });
}