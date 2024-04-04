import FormInput from '../../../components/Inputs/FormInput';
import './index.css'
import {TiUserAdd} from "react-icons/ti"
import {CgLogIn} from "react-icons/cg"
import { FormProps, Link, useAsyncError, useNavigate } from 'react-router-dom';
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'; 
import { useFormik } from "formik";
import { AXIOS } from '../../../config/axios.config';
import { API_URLS } from '../../../constants/api.urls';
import { useContext, useEffect, useRef, useState } from 'react';
import * as yup from 'yup' ;
import { AppContext } from '../../../components/context/store';
import { loginFormType } from '../../../types/user.types';
import { tokensType } from '../../../types/tokens.type';
import { IUserState } from '../../../components/context/types/context.types';
let property : string ;

 const SignUpInputsData = [

        {
            Title : "confirmCode" ,
            PlaceHolder : "کد تایید را وارد کنید." ,
            Type : "tell"
        },
    
    ]

    const validationSchema = yup.object({
        confirmCode : yup.string().required("کد تایید را وارد کنید."),
    })

    
    export interface userInfo {
        userInfo ?: Partial<IUserState> ; 
        onComplete : (token:tokensType)=>void ;
    }

export const VerifyStep : React.FC<userInfo> = ({userInfo,onComplete}) : JSX.Element =>{

    // const {user,setUser} = useContext(AppContext);
    const {update,setUpdate} = useContext(AppContext)

    const ref = useRef<any>(null);

    type VerifyFormProps = {
        confirmCode : string
    }

    type verfiedUser = {
        // username : string ; 
        // email : string ;
        phoneNumber : string ;
        // password : string ;
        // confirmPassword : string ;
        // token : string ;
        // isAuthenticated : boolean
    }

    
    const formik = useFormik<VerifyFormProps>({
        initialValues :{
            confirmCode : ""
        },
        validationSchema ,
        onSubmit : (data:any,{resetForm})=>{
        
            const tokens : tokensType = 
            {
                access : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg",
                refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjcyODAyMDI4fQ.P1_rB3hJ5afwiG4TWXLq6jOAcVJkvQZ2Z-ZZOnQ1dZw"
            }
                
            onComplete(tokens);

            handleClick();

            setTimeout(()=>{
            resetForm();
            },300)
    
            
        },

    })


    const navigate = useNavigate();

        const handleClick = async ()=>{
           
            // console.log('in verify step: ' , user) ; 
            navigate("/home");

        }


        // useEffect(()=>{
            
        //     // console.log("in useEffect!!!!!!!");
        //     // console.log("update in useEffect!!!!!!!",update);

        // },[update])


    return (
        <div className="signUpPage"> 
        
        <div className="VerifyFormContainer">

            <div className="signUpTitleWrapper">
                
                <h2 className='title text-gray-300'>ثبت نام در تایپتو</h2>
                
                <div className="descriptionWrapper">
                    <p className="description">کد تایید پیامک شده را وارد کنید!</p>
                </div>

            </div>

            <form onSubmit={formik.handleSubmit} className='form'>
                
                {SignUpInputsData.map((input)=>{
                    property = input.Title ;
                    return <li key={input.Title} > 
                    <FormInput ref={ref} title={input.Title} placeHolderStr={input.PlaceHolder} 
                    type={input.Type}  onchange={formik.handleChange} formValue={formik.values.confirmCode} inputId={input.Title}/> </li>
                })}


                <div className="verifyFormButtons">

                    {/* <Link to="/login"> <TopHeaderButton title="ورود" icon={<CgLogIn />} /> </Link> */}
                    <TopHeaderButton title="تایید" buttonType={"submit"} icon={<TiUserAdd />}/>
                    {/* <TopHeaderButton title="تایید" buttonType={"submit"} icon={<TiUserAdd />}/> */}
                
                </div>

            </form>

        </div>
         </div>

    )
}