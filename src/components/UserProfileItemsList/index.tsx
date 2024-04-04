import React, { useContext, useState } from "react";
import './index.css';
import { AppContext } from "../context/store";
import UserItemsButton from "../Buttons/UserItemsButton";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


interface UserProfileItemsList{
    setVal:(num:number)=>void ; 
}
export const UserProfileItemsList : React.FC<UserProfileItemsList> = ({setVal}) : JSX.Element =>{

     

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

    const {user} = useContext(AppContext) ;
    const navigate = useNavigate() ;  




    const handleClick = (slugButton:string) => {
        switch (slugButton) {
            case 'editProfile': 
                navigate('/userProfile')                
                setVal(1) ; 
                break;
        
            case 'exit': 
                navigate('/userProfile')
                setVal(2) ;          
                break;
        
            default:
                break;
        }
    }

    return <div className="userProfileItemsListWrapper" >
        
        <div className="avatarWrapper">
            <div className="avatar">
                <img src="https://img.icons8.com/ios-glyphs/90/000000/person-male.png" alt="avatar" />
            </div>
        </div>

        <div className="userPhoneNumberWrapper">
        
        <div className="userInfoContainer">
        {user?.username ? <p className="userInfo">{user?.username}</p> : <p className="userInfo">{user?.phoneNumber || ''}</p> }
        </div>

        </div>

        <div className="itemsListWrapper">

            <ul className="userItemsList">

                {
                    itemsBtnData.map((item)=>{
                        return <li key={item.slug}> <UserItemsButton icon={item.icon} title={item.title} onclick={()=>handleClick(item.slug)} />  </li>
                    })
                }
                
            </ul>
            
        </div>

    </div>

}