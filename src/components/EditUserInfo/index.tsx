import React from 'react'
import './index.css' ; 
import FormInput from '../Inputs/FormInput';
import TextInput from '../Inputs/TextInput';
import DropDown from '../MBTIDropDown';

interface EditUSerInfoProps {} 

const EditUserInfo:React.FC<EditUSerInfoProps> = () : JSX.Element => {
  return (
    <div className='editUserInfoWrapper'>
        
        <div className='editUserInfo'>
            <TextInput placeHolderStr='نام کاربری خود را وارد کنید.'  lable='نام کاربری' type='text'    />
            <TextInput placeHolderStr='ایمیل خود را وارد کنید.'  lable='ایمیل' type='email'    />
            <DropDown />



        </div>

    </div>
  )
}

export default EditUserInfo
