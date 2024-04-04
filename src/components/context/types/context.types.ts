import { MdEmail } from 'react-icons/md';
export interface AppContextState {
    user : {
    phoneNumber : string ,
    access : string , 
    refresh : string ,
    avatar : string , 
    username : string , 
    email : string , 
    mbtiType : string
    }
} 

export interface AppContextAction<T,K> {
    type : T,
    payload?: K 
}

export interface IUserState {
    id : string , 
    phoneNumber : string ,
    access : string , 
    refresh : string ,
    avatar : string , 
    username : string , 
    email : string , 
    isAuthenticated : boolean
    mbtiType : string
}

export interface loginUser {
    phoneNumber : string ,
    access : string , 
    refresh : string
}