import "./index.css"

interface NavBarButtonProps {
    faTitle:string;
    enTitle?:string;
    icon?:any;  
    onClickFunction ?: ()=> void ;
}


const NavBarButton : React.FC<NavBarButtonProps> = ({faTitle,enTitle,icon,onClickFunction}) : JSX.Element =>{
    return (<button className="navBarBtn" onClick={onClickFunction}>
        <div className="navBarIcon">{icon}</div>
        
        <div className="buttonTitles">
        <div className="farsiTitle">{faTitle}</div>
        <div className="englishTitle">{enTitle}</div>
        
        </div>
       </button>
)


}

export default NavBarButton ;