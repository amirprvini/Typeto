import './index.css'
import FormInput from '../../components/Inputs/FormInput'
import TopHeaderButton from '../../components/Buttons/TopHeaderButton'; 
import { Link, useNavigate } from 'react-router-dom';
import {TiUserAdd} from "react-icons/ti"
import {CgLogIn} from "react-icons/cg"


export const LoginPage : React.FC = () : JSX.Element =>{

     const LoginInputsData = [
        {
            Title : "username" ,
            PlaceHolder : "نام کاربری را وارد کنید." ,
            Type : "text"
        },
        {
            Title : "password" ,
            PlaceHolder : "رمز عبور خود را وارد کنید." ,
            Type : "password"
        },
        {
            Title : "phoneNumber" ,
            PlaceHolder : "شماره موبایل خود را وارد کنید." ,
            Type : "tell"
        },
    
    ]


    return (
        <div className="loginPage"> 


        <div className="loginFormContainer">

            <div className="loginTitleWrapper">
                <h2 className='loginTitle text-gray-300'>ورود به سایت</h2>
                {/* <p className="description">به تایپتو خوش اومدی! برای عضویت در سایت مشخصاتت رو وارد کن.</p> */}
            </div>

            <form action="#" className='form'>
                
                {LoginInputsData.map((input)=>{
                    return <li key={input.Title} > 
                    <FormInput title={input.Title} placeHolderStr={input.PlaceHolder} type={input.Type}/> </li>
                })}


            <div className="loginFormButtons">

                <div className="forgotPassWrapper">

                    <a href="#" className="forgotPass">آیا رمز عبور خود را فراموش کردید؟</a>
                
                </div>

                    <TopHeaderButton title="ورود به پنل کاربری" icon={<CgLogIn />} />
                    <Link to="/signUp"> <TopHeaderButton title="ثبت نام در سایت" icon={<TiUserAdd />}/> </Link>

            </div>

            </form>

        </div>
        
         </div>
    )
}