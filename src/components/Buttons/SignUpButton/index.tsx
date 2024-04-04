interface ISignUpButtonProps {
    isActive : boolean ;
    name ?: string ; 
    fuction ?: ()=> void ; 
}


const SignUpButton : React.FC<ISignUpButtonProps> = ({
    isActive = true ,
    name = "",
    fuction = ()=>{}}) : JSX.Element =>{
    return <button className="" onClick={fuction}>Login</button>
}

export default SignUpButton ;