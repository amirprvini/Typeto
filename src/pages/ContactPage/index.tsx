import FormInput from '../../components/Inputs/FormInput'
import './index.css'
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import TopHeaderButton from '../../components/Buttons/TopHeaderButton'; 

 const ContactInputsData = [
        {
            Title : "username" ,
            PlaceHolder : "عنوان" ,
            Type : "text"
        },
        {
            Title : "email" ,
            PlaceHolder : "ایمیل خود را وارد کنید." ,
            Type : "email"
        },
        // {
        //     Title : "phoneNumber" ,
        //     PlaceHolder : "شماره موبایل خود را وارد کنید." ,
        //     Type : "textArea"
        // },
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

const ContactPage :React.FC = () : JSX.Element =>{

    return (<div className="contactPage"> 
        
        <div className="formContainer">

            <div className="contactPageTitleWrapper">
                <h2 className='title text-gray-300'>تماس با ما</h2>
                <p className="description">در صورت وجود هرگونه مشکل از طریق پنل کاربری خود ، مشکل خود را پیگیری نمایید. این بخش تنها برای انتقادات و پیشنهادات میباشد
                 و به ایمیل های ارسالی در مورد هرگونه مشکل پاسخی داده نمیشود.</p>
            </div>

            <form action="#" className='form'>
                
                {ContactInputsData.map((input)=>{
                    return <li key={input.Title} > 
                    <FormInput title={input.Title} placeHolderStr={input.PlaceHolder} type={input.Type}/> </li>
                })}

                <textarea className='contactTextArea' placeholder='پیام شما'></textarea>


                <div className="formButtons">

                    <TopHeaderButton title="ارسال پیام" icon={<RiSendPlaneFill />}/>

                </div>

            </form>

        </div>
         </div>)
}



export default ContactPage ;