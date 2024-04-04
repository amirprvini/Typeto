import { BsArrowLeftCircle } from "react-icons/bs";
import './index.css'


interface IMoreButton {
    onClickFunc ?: ()=> void ;
}

const MoreButton : React.FC<IMoreButton> = ({onClickFunc}) : JSX.Element =>{

    return (
        <div className="moreButton cursor-pointer"> 

            <button onClick={onClickFunc}> مشاهده موارد بیشتر </button>
            <div className="moreBtnIcon"> <BsArrowLeftCircle /> </div>
                                
        </div>
    )

}

export default MoreButton ; 
    