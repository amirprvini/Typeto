import React, { useEffect, useRef, useState } from 'react' ; 
import './index.css'
import { UserProfileItemsList } from '../../components/UserProfileItemsList';
import EditUserInfo from '../../components/EditUserInfo';
import SignOut from '../../components/SignOut';


const UserProfilePage = () => {

  const [value,setValue] = useState<number>(-1) ;

  console.log('value in userProfile Page: ' , value) ; 

  if (value==2) {

    return (
    <div className="userProfilePage"> 

    <div className="userSideBarContainer "> <UserProfileItemsList setVal={(number)=>setValue(number)} /> </div>    

    <div className="userContentContainer"> <SignOut /> 
      
     </div>
    
    </div>

  )}else{
    
    return(
      <div className="userProfilePage"> 

    <div className="userSideBarContainer"> <UserProfileItemsList setVal={(number)=>setValue(number)} /> </div>    

    <div className="userContentContainer"> <EditUserInfo /> 

      
     </div>
    
    </div>
    
    )
  }
    


  
}

export default UserProfilePage
