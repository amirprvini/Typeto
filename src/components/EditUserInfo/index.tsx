import React, { useContext, useState } from 'react'
import './index.css' ; 
import FormInput from '../Inputs/FormInput';
import TextInput from '../Inputs/TextInput';
import DropDown from '../MBTIDropDown';
import { useFormik } from 'formik';
import { editFormType } from '../../types/user.types';
import {TiUserAdd} from "react-icons/ti"
import TopHeaderButton from '../Buttons/TopHeaderButton';
import ConfirmButton from '../ConfirmButton';
import * as yup from 'yup' ; 
import { useNavigate } from 'react-router-dom';
import { UseConfirmUserMutaion } from '../services/mutaions/useConfirmMutatioin';
import { AppContext } from '../context/store';

interface EditUSerInfoProps {

  initialValues ?: {
    username : string , 
    email : string , 
    mbtiType : string
  }

} 

const validationSchema = yup.object({
  username : yup.string().required('لطفا نام کاربری خود را وارد کنید!') ,
  email : yup.string().required('لطفا نام کاربری خود را وارد کنید!'),
})
const EditUserInfo:React.FC<EditUSerInfoProps> = ({initialValues}) : JSX.Element => {

  const [drpoState,setDropState] = useState<string>('') ;
  const {user,setUser} = useContext(AppContext) ;
  const confirmMutate = UseConfirmUserMutaion(user?.id || '') 

  const navigate = useNavigate() ; 

  const formik = useFormik<editFormType>({
    initialValues : {
        username : initialValues?.username || '',
        email : initialValues?.email || '' , 
        mbtiType: initialValues?.mbtiType || '' , 
    }, 

    validationSchema , 

    onSubmit: (data:any,{resetForm})=>{

    console.log('data in form: ' , data)
    console.log('drop State: ' , drpoState) ; 


    localStorage.setItem("access",user.access);
        localStorage.setItem("refresh",user.refresh);
        localStorage.setItem("user",JSON.stringify({
            avatar : '' , 
            username : data.username , 
            email : data.email , 
            mbtiType : drpoState ,
            isAuthenticated: user.isAuthenticated ,
            phoneNumber: user.phoneNumber || '' ,
            id: user.id || '' ,   
            refresh : user.refresh || '' ,
            access : user.access || '' 
                
            }));


            setUser({
              avatar : '' , 
              username : data.username , 
              email : data.email , 
              mbtiType : drpoState ,
              ...user
            })

    confirmMutate.mutate({

      avatar : '' , 
      username : data.username , 
      email : data.email , 
      mbtiType : drpoState ,
      isAuthenticated: user.isAuthenticated ,
      phoneNumber: user.phoneNumber || '' ,
      id: user.id || '' ,   
      refresh : user.refresh || '' ,
      access : user.access || '' 

    })


      setTimeout(()=>{
        resetForm() ; 
    },3000) 

    // forceUpdate()

    navigate('/home') ; 


    }

  }) 


  if(user.username && user.mbtiType && user.isAuthenticated && user.phoneNumber){

      return (

    <div className='editUserInfoWrapper'>

        <form onSubmit={formik.handleSubmit} className='editUserInfo'>

              <TextInput placeHolderStr={user.username}  lable='* نام کاربری' type='text' onchange={formik.handleChange} inputValue={formik.values.username} inputId='username'  />
              <TextInput placeHolderStr={user.email}  lable='ایمیل' type='email' onchange={formik.handleChange} inputValue={formik.values.email} inputId='email'  />
              <DropDown onCompleteDropDown={(type)=>{
                setDropState(type) ; 
              }} />

              <div className="confirmBtnWrapper">
                <ConfirmButton title='تایید اطلاعات کاربری' typeProp={'submit'} />
              </div>

            </form>

        </div>

  )
  

  }else{

    return (
     <div className='editUserInfoWrapper'>

        <form onSubmit={formik.handleSubmit} className='editUserInfo'>

              <TextInput placeHolderStr='نام کاربری خود را وارد کنید.'  lable='* نام کاربری' type='text' onchange={formik.handleChange} inputValue={formik.values.username} inputId='username'  />
              <TextInput placeHolderStr='ایمیل خود را وارد کنید.'  lable='ایمیل' type='email' onchange={formik.handleChange} inputValue={formik.values.email} inputId='email'  />
              <DropDown onCompleteDropDown={(type)=>{
                setDropState(type) ; 
              }} />

              <div className="confirmBtnWrapper">
                <ConfirmButton title='تایید اطلاعات کاربری' typeProp={'submit'} />
              </div>

            </form>

        </div>
  )

  }

}

export default EditUserInfo
