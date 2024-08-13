import React, { useContext, useEffect, useReducer, useState } from "react";
import { FormProps } from "react-router-dom";
import { createContext } from "react";
import { AppContextAction, AppContextState, IUserState, loginUser} from "./types/context.types";
import { userReducer } from "./reducers/userReducer";
import { AXIOS } from "../../config/axios.config";
import { REJoin } from "./reJoin";


// const initialState : AppContextState = {
//         user : {
//             phoneNumber : '' ,
//             access : '' , 
//             refresh : '' ,
//             avatar : '' , 
//             username : '' , 
//             email : '' , 
//             mbtiType : ''
//         }
//     }


export const AppContext = createContext<any>({});

export interface ContextProviderProps extends React.PropsWithChildren {}

export const ContextProvider :React.FC<ContextProviderProps>  = ({children}): JSX.Element =>{
    
    const [user,setUser] = useState<IUserState>();
    const [loading,setLoading] = useState<boolean>(false) ;
    const [updateComments , setUpdateComments] = useState<boolean>(false) ; 

    // const [updateApp,setUpdateApp] = useState<boolean>(false);


//     const combinereducer = ({user}:AppContextState,action:AppContextAction<any,any>)=> ({
//         user : userReducer(user,action)
//     }
// )
    // const [state, dispatch] = useReducer(combinereducer,initialState);


    useEffect(()=>{

        const access = localStorage.getItem('access') || '';
        const refresh = localStorage.getItem('refresh') || '';
        const userToken = localStorage.getItem('user') || '';

        
        if(access && refresh && userToken){

            const userAsObj = JSON.parse(userToken) ; 
            
            setUser({
                access:access,
                refresh : refresh,
                phoneNumber: userAsObj!.phoneNumber ,
                avatar : userAsObj!.avatar , 
                username : userAsObj!.username , 
                email : userAsObj!.email , 
                mbtiType : userAsObj!.mbtiType,
                isAuthenticated: userAsObj!.isAuthenticated ,
                id: userAsObj!.id ,
            })

            // AXIOS.defaults.headers.common.Authorization = `Bearer ${access}`

        }else{

            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user');

            // AXIOS.defaults.headers.common.Authorization = '' ;
        }

    },[])

    return <AppContext.Provider value = {{
        user,
        setUser,
        loading,
        setLoading,
        updateComments,
        setUpdateComments
    }}>
        {children}
    </AppContext.Provider>
}

