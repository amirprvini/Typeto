import React, { useContext, useState } from 'react'
import TextInput from '../Inputs/TextInput';
import DropDown from '../MBTIDropDown';
import { useFormik } from 'formik';
import { editFormType } from '../../types/user.types';
import ConfirmButton from '../ConfirmButton';
import * as yup from 'yup' ; 
import {useNavigate } from 'react-router-dom';
import { UseConfirmUserMutaion } from '../services/mutaions/useConfirmMutatioin';
import { AppContext } from '../context/store';

interface EditUSerInfoProps {

  initialValues ?: {
    username : string , 
    email : string , 
    mbtiType : string
  }

  onComplete : (data:any)=> void 

} 

const validationSchema = yup.object({
  username : yup.string().required('لطفا نام کاربری خود را وارد کنید!') ,
  email : yup.string().required('لطفا ایمیل خود را وارد کنید!'),
})

const EditUserInfo:React.FC<EditUSerInfoProps> = ({initialValues,onComplete}) : JSX.Element => {

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

            handleConfirm(data) ; 

      setTimeout(()=>{
        resetForm() ; 
    },3000) 

    onComplete(data)
    navigate('/userProfile/') ; 
    window.scrollTo(0,0);

    }

  }) 

  const handleConfirm = async (data:editFormType)=>{
     
    console.log('1- global user before set: ' , user)

            setUser({
              avatar : '' , 
              username : data.username , 
              email : data.email , 
              mbtiType : drpoState ,
              ...user
            })

            console.log('2- global user after set: ' , user)

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



    // const Users = await axios.get(`/users/${user?.id}`);
    // const getUser = Users.data.find((userObj:IUserState)=>{
    //           return userObj.id === user.id
    // })
    // console.log('get user from json: ' , getUser); 


    // await axios.put(`/users/${user?.id}`,{

    //           avatar : '' , 
    //           username : data.username , 
    //           email : data.email , 
    //           mbtiType : drpoState ,
    //           ...user

    //         });
  



          }


  if(user?.username && user?.mbtiType && user?.isAuthenticated && user?.phoneNumber){

      return <div className='editUserInfoWrapper w-full flex justify-center items-center'>

        <form onSubmit={formik.handleSubmit} className='editUserInfo flex flex-wrap flex-col justify-start items-center bg-white rounded-lg shaddow-lg min-h-max text-black my-4 py-5 w-[90%] sm:w-3/5 lg:w-1/2 2xl:w-2/5 shadow-2xl'>

              <TextInput placeHolderStr={user.username}  lable='* نام کاربری' type='text' onchange={formik.handleChange} inputValue={formik.values.username} inputId='username' bgColor='white' textColor='black'/>
              <TextInput placeHolderStr={user.email}  lable='ایمیل' type='email' onchange={formik.handleChange} inputValue={formik.values.email} inputId='email' bgColor='white' textColor='black' />
              
              <DropDown onCompleteDropDown={(type)=>{
                setDropState(type) ; 
              }}  widthProp='3/5' justifyProp='start'/>

              <div className="confirmBtnWrapper mt-20">
                <ConfirmButton title='تایید اطلاعات کاربری' typeProp={'submit'} widthProp='3/5'/>
              </div>

            </form>

        </div>

  }else{

    return <div className='editUserInfoWrapper w-full flex justify-center items-center '>

        <form onSubmit={formik.handleSubmit} className='editUserInfo flex flex-wrap flex-col justify-start items-center bg-white rounded-lg shaddow-lg min-h-max text-black my-4 py-5 w-[90%] sm:w-3/5 lg:w-1/2 2xl:w-2/5 shadow-2xl'>

              <TextInput placeHolderStr='نام کاربری خود را وارد کنید.'  lable='نام کاربری' type='text' onchange={formik.handleChange} inputValue={formik.values.username} inputId='username' bgColor='white' textColor='black' />
              {
                formik.errors.username && formik.touched && <div className="userNameErrorTitleWrapper w-full flex justify-start px-8 mb-4">
                    <h6 className='userNameErrorTitle text-red-600 text-sm mb-4'>*{formik.errors.username}</h6>
                </div>
              }

              <TextInput placeHolderStr='ایمیل خود را وارد کنید.'  lable='ایمیل' type='email' onchange={formik.handleChange} inputValue={formik.values.email} inputId='email' bgColor='white' textColor='black' />
              {
                formik.errors.email && formik.touched && <div className="emailErrorTitleWrapper w-full flex justify-start px-8 mb-4">
                    <h6 className='emailErrorTitle text-red-600 text-sm mb-4'>*{formik.errors.email}</h6>
                </div>
              }

              <DropDown onCompleteDropDown={(type)=>{
                setDropState(type) ; 
              }} />

              <div className="confirmBtnWrapper">
                <ConfirmButton title='تایید اطلاعات کاربری' typeProp={'submit'} />
              </div>

            </form>

        </div>
  }

}

export default EditUserInfo
