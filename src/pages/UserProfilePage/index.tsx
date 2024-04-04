import React, { useEffect, useRef, useState } from 'react' ; 
import './index.css'
import { UserProfileItemsList } from '../../components/UserProfileItemsList';
import EditUserInfo from '../../components/EditUserInfo';


const UserProfilePage = () => {

  const [value,setValue] = useState<number>(-1) ;

  console.log('value in userProfile Page: ' , value) ; 

  return (
    <div className="userProfilePage"> 

    <div className="userSideBarContainer"> <UserProfileItemsList setVal={(number)=>setValue(number)} /> </div>    

    <div className="userContentContainer"> <EditUserInfo /> </div>
    </div>
  )
}

export default UserProfilePage
