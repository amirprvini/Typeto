import React, { useContext, useEffect } from 'react'
import EditUserInfo from '../../components/EditUserInfo'
import { AppContext } from '../../components/context/store'

interface EditUserProfilePageProps {}

const EditUserProfilePage:React.FC<EditUserProfilePageProps> = ():JSX.Element => {

    const {user,setUser} = useContext(AppContext);

    return <div className="userProfilePage w-[90%] sm:w-3/4 bg-black text-white text-7xl flex justify-center gap-12"> 
        
        <div className="userContentContainer w-full"> <EditUserInfo onComplete={(data)=>{
            
            console.log('user info in page: ' , data) ;
            
            setUser({
              avatar : '' , 
              username : data.username , 
              email : data.email , 
              mbtiType : data.mbtiType ,
              ...user
            })

            console.log('user info in page: ' , user) ;

        }} /> </div>
    
    </div>

}

export default EditUserProfilePage