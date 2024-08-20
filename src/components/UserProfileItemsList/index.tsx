import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import './index.css';
import { AppContext } from "../context/store";
import UserItemsButton from "../Buttons/UserItemsButton";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import UserAvatar from "../UserAvatar";
import { useNavigate } from "react-router-dom";
import axios from "axios";


interface UserProfileItemsListProps{
    userID : string 
    setVal ?:(num:number)=>void ; 
}
export const UserProfileItemsList : React.FC<UserProfileItemsListProps> = ({setVal,userID}) : JSX.Element =>{

  const {loading,setLoading} = useContext(AppContext);
  const [image,setImage] = useState<string>("./images/icons8-customer-90.png") ;    
  const {user} = useContext(AppContext);

  const handleUser = async ()=>{
    
    const {data} = await axios.get(`http://localhost:3000/users/${userID}`);
    console.log('user: ' , data);
  }

  useEffect(()=>{
    
    handleUser()

  },[loading])

    const itemsBtnData = [
        {
            title: "تکمیل پروفایل کاربری",
            slug : 'editProfile' , 
            icon: <FaUserEdit /> 
        },

        {
            title: "خروج از حساب کاربری",
            slug : 'exit' , 
            icon: <RxExit /> 
        },
    ]

   const navigate = useNavigate() ;  

    const handleClick = (slugButton:string) => {
        
        switch (slugButton) {
            case 'editProfile': 
                navigate('/userProfile/editProfile')               
                break;
        
            case 'exit': 
                navigate('/userProfile/signOut')         
                break;
        
            default:
                break;
        }
    }


    return <div className="userProfileItemsListWrapper my-4 rounded-lg shadow-2xl" onLoad={()=>setLoading(!loading)}>
        
        <div className="avatarWrapper">
            <UserAvatar avatarUrl={'./images/icons8-customer-90.png'} />
        </div> 
        

        <div className="userPhoneNumberWrapper">
        
        <div className="userInfoContainer">
            {user?.username ? <p className="userInfo">{user?.username}</p>:<p className="userInfo">{user?.phoneNumber || ''}</p> }
        </div>

        </div>

        <div className="itemsListWrapper">

            <ul className="userItemsList w-full flex flex-col justify-center items-center">

                {
                    itemsBtnData.map((item)=>{
                        if(item.slug === 'editProfile')  
                            return <li className="w-full" key={item.slug}> <UserItemsButton icon={item.icon} title={user?.username ? "ویرایش پروفایل کاربری":item.title} onclick={()=>handleClick(item.slug)}/> </li> 
                    
                        else
                            return <li className="w-full" key={item.slug}> <UserItemsButton icon={item.icon} title={item.title} onclick={()=>handleClick(item.slug)}/> </li> 
                     
                    })
                }
                
            </ul>
            
        </div>

    </div>

}