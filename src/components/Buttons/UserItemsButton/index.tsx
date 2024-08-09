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
        
            <div className='userItemsButton flex flex-col items-center justify-center group'>

                <div className='userItemsButtonIcon'>{icon}</div>

                <div className='userItemsButtonTitleWrapeer w-full flex justify-center rounded-lg py-2 px-4 group-hover:bg-black group-hover:text-white'>
                      <p className="userItemsButtonTitle w-4/5 flex flex-wrap justify-center leading-6"> {title} </p>
                </div>

            </div>
    </div>
  )
}

export default UserItemsButton
