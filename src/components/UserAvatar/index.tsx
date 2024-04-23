import React from 'react'
import './index.css' ; 
import AddButton from '../Buttons/AddButton';


interface UserAvatarProps {
    avatarUrl ?: any ;  
}
const UserAvatar : React.FC<UserAvatarProps> = ({avatarUrl='https://img.icons8.com/ios-glyphs/90/000000/person-male.png'}) : JSX.Element => {
  return (
    <>
    <div className="avatarContainer w-[130px] h-[100px]">

        <div className="avatar">
            <img src={avatarUrl} alt="avatar" />
        </div>
        
    </div>
    </>
  )
}

export default UserAvatar
