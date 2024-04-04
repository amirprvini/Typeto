import { BsArrowLeftCircle } from "react-icons/bs";
import './index.css'
import { useNavigate } from "react-router-dom";


interface IFameMoreButton {
    title : string ;
}

const FameMoreButton : React.FC<IFameMoreButton> = ({title}) : JSX.Element =>{

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/famepeopletypes/" + title)
    }

    return (
        <div className="moreButton cursor-pointer" onClick={handleClick}> 

            <button> مشاهده موارد بیشتر </button>
            <div className="moreBtnIcon"> <BsArrowLeftCircle /> </div>
                                
        </div>
    )

}

export default FameMoreButton ; 
    