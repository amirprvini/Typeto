import React from 'react'
import './index.css'

interface UserItemsButtonProps {
    icon:any,
    title:string ,
    onclick ?: ()=> void 
}

const UserItemsButton : React.FC<UserItemsButtonProps> = ({icon,title,onclick}) : JSX.Element => {
  return (
    <div className='userItemsButtonWrapper cursor-pointer' onClick={onclick}>
        
            <div className='userItemsButton'>

                <div className='userItemsButtonIcon'>{icon}</div>

                <div className='userItemsButtonTitle'>{title}</div>

            </div>
    </div>
  )
}

export default UserItemsButton
