import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import './index.css';
import { AppContext } from "../context/store";
import UserItemsButton from "../Buttons/UserItemsButton";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import UserAvatar from "../UserAvatar";
import { useNavigate } from "react-router-dom";
import { UseGetUserQuery } from "../services/queries/useGetUserQuery";


interface UserProfileItemsListProps{
    setVal ?:(num:number)=>void ; 
}
export const UserProfileItemsList : React.FC<UserProfileItemsListProps> = ({setVal}) : JSX.Element =>{

    const {user,setUser} = useContext(AppContext) ;
    const {data} = UseGetUserQuery(user?.id || "") ;

    const [loading,setLoading] = useState<boolean>(false); 
    useEffect(()=>{
        console.log('get user from query: ' , data);
    },[loading])
    

    const [image,setImage] = useState<string>("./images/icons8-customer-90.png") ; 
     

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


    return <div className="userProfileItemsListWrapper my-4 rounded-lg shadow-2xl" onLoad={()=>{setLoading(!loading)}}>
        
        <div className="avatarWrapper">
            <UserAvatar avatarUrl={image} />
        </div> 
        

        <div className="userPhoneNumberWrapper">
        
        <div className="userInfoContainer">
            {data?.username ? <p className="userInfo">{data?.username}</p>:<p className="userInfo">{data?.phoneNumber || ''}</p> }
        </div>

        </div>

        <div className="itemsListWrapper">

            <ul className="userItemsList w-full flex flex-col justify-center items-center">

                {
                    itemsBtnData.map((item)=>{
                        return <li className="w-full" key={item.slug}> <UserItemsButton icon={item.icon} title={item.title} onclick={()=>handleClick(item.slug)}/> </li>
                    })
                }
                
            </ul>
            
        </div>

    </div>

}