import {useContext, useEffect, useState } from 'react';
import { UserProfileItemsList } from '../../components/UserProfileItemsList';
import { AppContext } from '../../components/context/store';
import axios from 'axios';
import { UseGetUserQuery } from '../../components/services/queries/useGetUserQuery';

interface UserProfilePageProps {}
const UserProfilePage : React.FC<UserProfilePageProps> = () : JSX.Element => {

    return <div className="userProfilePage w-[90%] sm:w-3/4 lg:w-1/2 bg-black text-white text-7xl flex justify-center gap-12"> 

      <div className="userSideBarContainer w-3/4 "> <UserProfileItemsList/> </div>    

    </div>

}
   
export default UserProfilePage
