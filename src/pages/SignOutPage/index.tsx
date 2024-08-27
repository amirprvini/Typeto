import React from 'react'
import LogOut from '../../components/LogOut'


interface LogOutPageProps {}

const SignOutPage : React.FC<LogOutPageProps> = ():JSX.Element => {
  return <div className="userProfilePage w-[90%] sm:w-3/4 lg:w-2/5 bg-black text-white text-7xl flex justify-center"> 
    
        <div className="signOutPageWrapper w-3/4 my-4 "> <LogOut/> </div>
    
    </div>
}

export default SignOutPage