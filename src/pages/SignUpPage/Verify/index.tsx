import FormInput from '../../../components/Inputs/FormInput';
import './index.css'
import {TiUserAdd} from "react-icons/ti"
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'; 
import { useFormik } from "formik";
import * as yup from 'yup' ;
import { tokensType } from '../../../types/tokens.type';
import { IUserState } from '../../../components/context/types/context.types';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


 const SignUpInputsData = {
            Title : "confirmCode" ,
            PlaceHolder : "کد تایید را وارد کنید." ,
            Type : "tel"
        }

    const validationSchema = yup.object({
        confirmCode : yup.string().required("کد تایید را وارد کنید."),
    })

    
    export interface userInfo {
        userInfo ?: Partial<IUserState> ; 
        onComplete : (token:tokensType)=>void ;
    }

export const VerifyStep : React.FC<userInfo> = ({userInfo,onComplete}) : JSX.Element =>{

    const ref = useRef<any>(null);

    type VerifyFormProps = {
        confirmCode : string
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
            navigate("/home");
        }


    return (
        <div className="signUpPage"> 
        
        <div className="VerifyFormContainer w-[90%] sm:w-3/5 lg:w-1/2 2xl:w-2/5 shadow-2xl">

            <div className="signUpTitleWrapper">
                
                <h2 className='title text-gray-400'>ثبت نام در تایپتو</h2>
                
                <div className="descriptionWrapper mt-4">
                    <p className="description">کد تایید پیامک شده به شماره {userInfo?.phoneNumber?.slice(8,11) + "****" + userInfo?.phoneNumber?.slice(0,4)} را وارد کنید!</p>
                </div>

            </div>

            <form onSubmit={formik.handleSubmit} className='form px-4'>
                
                <FormInput ref={ref} title={SignUpInputsData.Title} placeHolderStr={SignUpInputsData.PlaceHolder} 
                    type={SignUpInputsData.Type}  onchange={formik.handleChange} formValue={formik.values.confirmCode} inputId={SignUpInputsData.Title}/>
                {
                formik.errors.confirmCode && formik.touched && <div className="verifyErrorTitleWrapper w-full flex justify-start px-4">
                    <h6 className='verifyErrorTitle text-red-600'>*{formik.errors.confirmCode}</h6>
                </div>
                }

                <div className="verifyFormButtons">

                    <TopHeaderButton title="تایید" buttonType={"submit"} icon={<TiUserAdd />} color='black'/>
                
                </div>

            </form>

        </div>
         </div>

    )
}