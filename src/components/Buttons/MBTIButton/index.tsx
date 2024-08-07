import { useNavigate } from 'react-router-dom'
import './index.css'

interface IMBTIButton {
    typeTitle : string ,
    widthProp ?: number ,
    onCompleteButton : (type:string)=>void 
}


const MBTIButton : React.FC<IMBTIButton> = ({typeTitle,onCompleteButton}) : JSX.Element =>{
   
    const handleClick = ()=> {
     
       // navigate("/personalitytypes/" + typeTitle)
       onCompleteButton(typeTitle)

    } 

    return ( 
        <div className="MBTIButton w-full h-10 cursor-pointer flex justify-center items-center" onClick={handleClick}>

            <p className="MBTIButtonTitle"> {typeTitle} </p>

        </div>
    )

}

export default MBTIButton ;