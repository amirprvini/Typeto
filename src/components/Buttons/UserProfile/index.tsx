import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import './index.css' ; 
import { useState } from "react";
import { UserProfileItemsList } from "../../UserProfileItemsList";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
interface IUserProfileProps {
}

export const UserProfile : React.FC <IUserProfileProps> = () : JSX.Element =>{
    const [state , setState] = useState();
    const [ isCliked , setIsClicked] = useState<boolean>(false);


    const navigate =  useNavigate();

    const handleClick = ()=>{
        setIsClicked(!isCliked)
        navigate('/userProfile') ;
        window.scrollTo(0,0);
    }
    return <div className="userProfileButtonWrapper text-white" onClick={handleClick}>
      
            <button className="userProfileButton">
                <div className="userIconWrapper"> <HiOutlineUserCircle /> </div>
                {/* <div className="downArrowIconWrapper"> <IoMdArrowDropdown /> </div> */}
            </button>
    
            {/* <div className="userProfileTitleWrapper">
                <p className="userProfileTitle">پروفایل کاربری</p>
            </div> */}
     
    
    
    </div>

}