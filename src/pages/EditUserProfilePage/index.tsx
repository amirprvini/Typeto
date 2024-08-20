import React, { useContext, useEffect } from 'react'
import EditUserInfo from '../../components/EditUserInfo'
import { AppContext } from '../../components/context/store'
import axios from 'axios';

interface EditUserProfilePageProps {}

const EditUserProfilePage:React.FC<EditUserProfilePageProps> = ():JSX.Element => {

    const {user,setUser,loading,setLoading} = useContext(AppContext);

    return <div className="userProfilePage w-[90%] sm:w-3/4 bg-black text-white text-7xl flex justify-center gap-12"> 
        
        <div className="userContentContainer w-full"> <EditUserInfo onComplete={async (user,data)=>{
            

        const getUser = await axios.get(`http://localhost:3000/users/${user.id}`);
        console.log('get user data in edit page: ' , getUser.data);
        console.log('get confirm data in edit page: ' , user.username) ;
        console.log('user data for put: ',user);

        await axios.put(`http://localhost:3000/users/${user.id}`,{
              ...user, 
              username : data.username , 
              email : data.email
            })

            setUser({
              ...user, 
              username : data.username , 
              email : data.email
            })

            setLoading(!loading)
            
        }} /> </div>
    
    </div>

}

export default EditUserProfilePage