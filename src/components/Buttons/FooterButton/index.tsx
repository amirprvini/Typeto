import "./index.css"

interface FooterButtonProps {
    faTitle:string;
    enTitle?:string;
    onClickFunction ?: ()=> void ;
}


const FooterButton : React.FC<FooterButtonProps> = ({faTitle,onClickFunction}) : JSX.Element =>{
    return (
    <button className="footerBtn text-right" onClick={onClickFunction}> {faTitle} </button> 
)


}

export default FooterButton ;