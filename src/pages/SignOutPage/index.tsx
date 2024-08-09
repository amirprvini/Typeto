import React from 'react'
import SignOut from '../../components/SignOut'

interface SignOutPageProps {}

const SignOutPage : React.FC<SignOutPageProps> = ():JSX.Element => {
  return <div className="userProfilePage w-[90%] sm:w-3/4 lg:w-2/5 bg-black text-white text-7xl flex justify-center"> 
    
        <div className="signOutPageWrapper w-3/4 my-4 "> <SignOut/> </div>
    
    </div>
}

export default SignOutPage