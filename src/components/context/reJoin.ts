import { useContext } from "react"
import { AppContext } from "./store"
import { AXIOS } from "../../config/axios.config";

export const REJoin = ()=>  ()=>{
    
    // const {user,setUser} = useContext(AppContext);

    // const access = localStorage.getItem('access');
    //     const refresh = localStorage.getItem('refresh');
    //     const userToken = JSON.parse(localStorage.getItem('user') || '');

    //     console.log('access token in useEffect: ',access);
    //     console.log('refresh token in useEffect: ',refresh);
    //     console.log('user in useEffect: ',userToken);

    //     if(access && refresh && userToken){

    //         console.log('user before setting :', user);
            
    //         setUser({
    //             access,
    //             refresh,
    //             ...userToken
    //         })

    //         AXIOS.defaults.headers.common.Authorization = `Bearer ${access}`

    //         console.log('user after setting :', user);
        
    //     }else{

    //         localStorage.removeItem('access');
    //         localStorage.removeItem('refresh');
    //         localStorage.removeItem('user');

    //         AXIOS.defaults.headers.common.Authorization = '' ;
    //     }

}