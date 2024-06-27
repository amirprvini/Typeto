import React, { ChangeEvent, useContext, useState } from "react";
import './index.css';
import { AppContext } from "../context/store";
import UserItemsButton from "../Buttons/UserItemsButton";
import { FaUserEdit } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../UserAvatar";


interface UserProfileItemsList{
    setVal:(num:number)=>void ; 
}
export const UserProfileItemsList : React.FC<UserProfileItemsList> = ({setVal}) : JSX.Element =>{


    const [image,setImage] = useState<any>(null) ; 
     

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


  const fileChangedHandler = (e:any) => {
  const selectFile = e.target.file ? e.target.files[0] : null;

  if (selectFile) {
    setImage(URL.createObjectURL(selectFile));
  }
};

    return <div className="userProfileItemsListWrapper my-4" >
        
        <div className="avatarWrapper">
        <UserAvatar avatarUrl={image} />
        </div>

        {
            image == null && <div className="chooseFileWrapper w-full text-[.8rem] flex justify-center">

        <input type="file" name="myImage" onChange={fileChangedHandler}/>
        
        </div>
        }

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