import FormInput from '../../../components/Inputs/FormInput';
import './index.css'
import {TiUserAdd} from "react-icons/ti"
import {FormProps, Link} from 'react-router-dom';
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'; 
import { useFormik } from "formik";
import * as yup from 'yup' ;
import { loginFormType } from '../../../types/user.types';
import { useRef } from 'react';



 const SignUpInputsData = {
            Title : "phoneNumber" ,
            PlaceHolder : "شماره موبایل خود را وارد کنید." ,
            Type : "tel"
        }

    const validationSchema = yup.object({
        phoneNumber : yup.string()
        .min(11,"شماره تلفن اشتباه است!").max(11,"شماره تلفن اشتباه است!").required("شماره موبایل خود را وارد کنید."),
    })


    export interface InquiryStepProps {
        onNextStep : (e:any)=> void,
        initialValues ?:{
            phoneNumber : string ,
        }
    }

export const InquiryStep : React.FC<InquiryStepProps> = ({onNextStep,initialValues}) : JSX.Element =>{

    const ref = useRef<any>(null);
    
    const formik = useFormik<loginFormType>({
        initialValues :{
            phoneNumber : initialValues?.phoneNumber || "" ,
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

        const handleClick = async (data:FormProps)=>{
        // setUser(data);
        // const postUserData = await AXIOS.post('/users/',data);

        }

    return (
        <div className="signUpPage"> 
        
        <div className="formContainer w-[90%] sm:w-3/5 lg:w-1/2 2xl:w-2/5 shadow-2xl">

            <div className="signUpTitleWrapper">
                <h2 className='title text-gray-400'>ثبت نام در تایپتو</h2>
                <p className="description">به تایپتو خوش اومدی! برای عضویت در سایت مشخصاتت رو وارد کن.</p>
            </div>

            <form onSubmit={formik.handleSubmit} className='form px-4'>
                
                <FormInput ref={ref} title={SignUpInputsData.Title} placeHolderStr={SignUpInputsData.PlaceHolder} 
                    type={SignUpInputsData.Type}  onchange={formik.handleChange} formValue={formik.values.phoneNumber} inputId={SignUpInputsData.Title}/>
                    
                {
                    formik.errors.phoneNumber && formik.touched && <div className="inquiryErrorTitleWrapper w-full flex justify-start px-4">
                    <h6 className='inquiryErrorTitle text-red-600'>*{formik.errors.phoneNumber}</h6>
                </div>
                }

                <div className="formButtons">

                    <Link to="/home"> <TopHeaderButton title="انصراف" color='black'/> </Link>
                    <TopHeaderButton title="ادامه" buttonType={"submit"} icon={<TiUserAdd/>} color='black'/>

                </div>

            </form>

        </div>
         </div>

    )
}