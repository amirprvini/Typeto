import React from 'react'

interface UserAvatarProps {
    avatarUrl ?: any ;  
}
const UserAvatar : React.FC<UserAvatarProps> = ({avatarUrl='https://img.icons8.com/ios-glyphs/90/000000/person-male.png'}) : JSX.Element => {
  return <div className="avatarContainer w-[130px] h-[100px]">

        <div className="avatar bg-black p-4 rounded-[50%]">
            <img src={avatarUrl} alt="avatar" />
        </div>
        
    </div>
}

export default UserAvatar
