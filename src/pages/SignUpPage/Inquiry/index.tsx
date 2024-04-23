import FormInput from '../../../components/Inputs/FormInput';
import './index.css'
import {TiUserAdd} from "react-icons/ti"
import {CgLogIn} from "react-icons/cg"
import { FormProps, Link, useNavigate } from 'react-router-dom';
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'; 
import { useFormik } from "formik";
import { AXIOS } from '../../../config/axios.config';
import { API_URLS } from '../../../constants/api.urls';
import { useContext, useEffect, useRef, useState } from 'react';
import * as yup from 'yup' ;
import { AppContext } from '../../../components/context/store';
import { loginFormType } from '../../../types/user.types';
let property : string ;




 const SignUpInputsData = [

        // {
        //     Title : "username" ,
        //     PlaceHolder : "نام کاربری را وارد کنید." ,
        //     Type : "text"
        // },
        // {
        //     Title : "email" ,
        //     PlaceHolder : "ایمیل خود را وارد کنید." ,
        //     Type : "email"
        // },
        {
            Title : "phoneNumber" ,
            PlaceHolder : "شماره موبایل خود را وارد کنید." ,
            Type : "tell"
        },
        // {
        //     Title : "password" ,
        //     PlaceHolder : "رمز عبور خود را وارد کنید." ,
        //     Type : "password"
        // },
        // {
        //     Title : "confirmPassword" ,
        //     PlaceHolder : "تکرار رمز عبور را وارد کنید." ,
        //     Type : "password"
        // }
    
    ]

    const validationSchema = yup.object({

        // username : yup.string().required("نام کاربری را وارد کنید."),
        // email : yup.string().required("ایمیل خود را وارد کنید."),
        phoneNumber : yup.string()
        .min(11,"شماره تلفن اشتباه است!").max(11,"شماره تلفن اشتباه است!").required("شماره موبایل خود را وارد کنید."),

        // password : yup.string().required("رمز عبور خود را وارد کنید."),
        // confirmPassword : yup.string().required("تکرار رمز عبور را وارد کنید.")

    })


    export interface InquiryStepProps {
        onNextStep : (e:any)=> void,
        initialValues ?:{
            // username : string ,
            // email : string ,
            phoneNumber : string ,
            // password : string ,
            // confirmPassword : string ,
            // token : string ,
            // isAuthenticated : boolean 
        }
    }

export const InquiryStep : React.FC<InquiryStepProps> = ({onNextStep,initialValues}) : JSX.Element =>{

    const ref = useRef<any>(null);
    
    const formik = useFormik<loginFormType>({
        initialValues :{
            // username : initialValues?.username || "" ,
            // email : initialValues?.email || "" ,
            phoneNumber : initialValues?.phoneNumber || "" ,
            // password : initialValues?.password || "" ,
            // confirmPassword : initialValues?.confirmPassword || "" ,
            // token : initialValues?.token || "", 
            // isAuthenticated : initialValues?.isAuthenticated || false 
        },


        validationSchema ,

        onSubmit : (data:any,{resetForm})=>{
        
            handleClick(data);
            setTimeout(()=>{
                resetForm();
            },300)
            
            onNextStep({
                id : String(Date.now()),
                ...data
            });
        }

    })

    const handleFormikValue = (prop:string)=>{
        //  if(prop === 'username')
        //  return formik.values.username

        // else if(prop === 'email')
        //  return formik.values.email

        //  else if(prop === 'username')
        //  return formik.values.username

        //  else if(prop === 'phoneNumber')
        //  return formik.values.phoneNumber

        //  else if(prop === 'password')
        //  return formik.values.password

        //  else 
        //  return formik.values.confirmPassword

        }


        const handleClick = async (data:FormProps)=>{
        // setUser(data);
        // const postUserData = await AXIOS.post('/users/',data);

        console.log("Data in inquiry step: ",data);
        
        }

    return (
        <div className="signUpPage"> 
        
        <div className="formContainer">

            <div className="signUpTitleWrapper">
                <h2 className='title text-gray-300'>ثبت نام در تایپتو</h2>
                <p className="description">به تایپتو خوش اومدی! برای عضویت در سایت مشخصاتت رو وارد کن.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className='form'>
                
                {SignUpInputsData.map((input)=>{
                    property = input.Title ;
                    return <li key={input.Title} > 
                    <FormInput ref={ref} title={input.Title} placeHolderStr={input.PlaceHolder} 
                    type={input.Type}  onchange={formik.handleChange} formValue={formik.values.phoneNumber} inputId={input.Title}/> </li>
                })}


                <div className="formButtons">

                    {/* <Link to="/home"> <TopHeaderButton title="انصراف" icon={<CgLogIn />} /> </Link> */}
                    
                    <Link to="/home"> <TopHeaderButton title="انصراف"/> </Link>
                    <TopHeaderButton title="ادامه" buttonType={"submit"} icon={<TiUserAdd />}/>

                </div>

            </form>

        </div>
         </div>

    )
}