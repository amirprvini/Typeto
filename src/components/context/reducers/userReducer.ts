import { UserActionTypes } from "../actions/userActions";
import { AppContextAction, IUserState } from "../types/context.types";

export const userReducer = (state:IUserState,
    action:AppContextAction<UserActionTypes,Partial<IUserState>>)=>{

        switch (action.type) {
            case UserActionTypes.USER_LOGGED_IN:
                return {
                    phoneNumber : action?.payload?.phoneNumber ,
                    access : action.payload?.access , 
                    refresh : action.payload?.refresh ,
                    avatar : action.payload?.avatar , 
                    username : action.payload?.username , 
                    email : action.payload?.email , 
                    mbtiType : action.payload?.mbtiType 
                }
            
            default : 
                return state;
        }



}