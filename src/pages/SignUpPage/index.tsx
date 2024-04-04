import { useContext, useState } from "react";
import { InquiryStep } from "./Inquiry";
import { VerifyStep } from "./Verify";
import { FormProps } from "react-router-dom";
import { AppContext } from "../../components/context/store";
import { AXIOS } from "../../config/axios.config";
import { UseLoginMutation } from "../../components/services/mutaions/useLoginMutation";
import { userInfo } from "os";
import { loginFormType } from "../../types/user.types";
import { loginRequest, loginResponse } from "../../types/api.types";
import toast from "react-hot-toast";
import { tokensType } from "../../types/tokens.type";
import { IUserState } from "../../components/context/types/context.types";

    enum SingUPPageSteps {
        InquiryStep = 0 , 
        VerifyStep = 1 
    }

    type loginType = {
        phoneNumber : string,
        
    }
    
export const SignUpPage : React.FC = () : JSX.Element =>{

    const {user,setUser} = useContext(AppContext);
    const [step,setStep] = useState<SingUPPageSteps>(SingUPPageSteps.InquiryStep);
    const [state,setState] = useState<IUserState>();

    const loginMutation = UseLoginMutation();

    const handleAuthentication = (tokens:tokensType)=>{

        // 1) save token in local storage

        // localStorage.setItem("access",tokens.access);
        // localStorage.setItem("refresh",tokens.refresh);
        // localStorage.setItem("user",JSON.stringify(state));

        // 2) set token globaly in axios header request 
        // AXIOS.defaults.headers.common.Authorization = `Bearer ${tokens}`

        // 3) set user Info in context api


        console.log("balaye setUser hastam!!!" ,user)

        setState({
                avatar : '' , 
                username : '' , 
                email : '' , 
                mbtiType : '',
                isAuthenticated:true,
                phoneNumber: state?.phoneNumber || '' , 
                id: state?.id || '' , 
                ...tokens
        })


        console.log('state after second set: ' , state) ; 

        setUser({
                    avatar : '' , 
                    username : '' , 
                    email : '' , 
                    mbtiType : '',
                    isAuthenticated:true,
                    phoneNumber : state?.phoneNumber,
                    id: state?.id || '' ,  
                    ...tokens
                    })

                    console.log('after setuser in onCompelete');
                    


        localStorage.setItem("access",tokens.access);
        localStorage.setItem("refresh",tokens.refresh);
        localStorage.setItem("user",JSON.stringify({
                    avatar : '' , 
                    username : '' , 
                    email : '' , 
                    mbtiType : '',
                    isAuthenticated:true,
                    phoneNumber : state?.phoneNumber || '', 
                    id: state?.id || 0 ,
                    ...tokens
                
            }));

        console.log("paeen setUser hastam!!!" ,user)

        loginMutation.mutate(
            {
                    avatar : '' , 
                    username : '' , 
                    email : '' , 
                    mbtiType : '',
                    isAuthenticated:true,
                    phoneNumber : state?.phoneNumber || '',
                    id: state?.id || '' , 
                    ...tokens
            },{
            
            onSuccess(){
               toast.success('Successfully toasted!');
            },

            onError(err){
                toast.error("This didn't work.")
            }
        })





    }

    console.log("global user in sign Up: ",user)
    
    return((()=>{
        
        switch(step){
            case SingUPPageSteps.InquiryStep :
            return <InquiryStep onNextStep={
                (data:IUserState)=>{
                setState(data)
               // setUser(data)
                setStep(SingUPPageSteps.VerifyStep)
            }}/>

            case SingUPPageSteps.VerifyStep :
            return <VerifyStep  onComplete={(tokens)=>{
            setState({
                avatar : '' , 
                username : '' , 
                email : '' , 
                mbtiType : '',
                isAuthenticated:true,
                phoneNumber: state?.phoneNumber || '' ,
                id: state?.id || '' ,   
                ...tokens
        })

                handleAuthentication(tokens);
            }} 
            
            
            />

            default : return <div></div> ; 
        }
    })())
}