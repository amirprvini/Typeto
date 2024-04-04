import { useNavigate } from 'react-router-dom';
import './index.css'
import { FaUserAlt } from "react-icons/fa";

interface IUserProfilePhoto {
    photoUrl?:string;
}

export const UserProfilePhoto : React.FC<IUserProfilePhoto> = 
({photoUrl=""}) : JSX.Element =>{

    
    return <div className="profileWrapper" >

        {photoUrl.length >= 1 ? <img src={photoUrl} alt='profilePhoto'/> :  <FaUserAlt /> }
    </div>
}