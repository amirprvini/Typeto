import "./index.css"


interface TopHeaderButtonProps {
    title:string;
    icon?:any; 
    buttonType ?: any ; 
    onclick ?: ()=> void ;
}


const TopHeaderButton : React.FC<TopHeaderButtonProps> = ({title,icon,buttonType,onclick}) : JSX.Element =>{
    return <button className="topHeaderBtn" type={buttonType} onClick={onclick} >
    <div className="buttonIcon">{icon}</div>
    <div className="buttonTitle">{title}</div>
     </button>
}

export default TopHeaderButton ;