import "./index.css"

interface FooterButtonProps {
    faTitle:string;
    enTitle?:string;
    onClickFunction ?: ()=> void ;
}


const FooterButton : React.FC<FooterButtonProps> = ({faTitle,enTitle,onClickFunction}) : JSX.Element =>{
    return (
    <button className="footerBtn" onClick={onClickFunction}> {faTitle} </button> 
)


}

export default FooterButton ;