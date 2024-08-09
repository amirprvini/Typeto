import "./index.css"


interface TopHeaderButtonProps {
    title:string;
    icon?:any; 
    buttonType ?: any ; 
    onclick ?: ()=> void ;
    color ?: string ;
    scaleProp ?: string 
}


const TopHeaderButton : React.FC<TopHeaderButtonProps> = ({title,icon,buttonType,onclick,color='white',scaleProp='100'}) : JSX.Element =>{
    return <button className={`topHeaderBtn text-${color} scale-${scaleProp} sm:scale-100`} type={buttonType} onClick={onclick} >
    <div className="buttonIcon">{icon}</div>
    <div className="buttonTitle">{title}</div>
     </button>
}

export default TopHeaderButton ;