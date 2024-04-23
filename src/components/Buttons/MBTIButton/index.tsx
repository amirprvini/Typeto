import { useNavigate } from 'react-router-dom'
import './index.css'

interface IMBTIButton {
    typeTitle : string ,
    widthProp ?: number ,
    onCompleteButton : (type:string)=>void 
}


const MBTIButton : React.FC<IMBTIButton> = ({typeTitle,onCompleteButton}) : JSX.Element =>{
   
   const navigate = useNavigate() ; 
   
    const handleClick = ()=> {
     
       // navigate("/personalitytypes/" + typeTitle)
       console.log(typeTitle)
       onCompleteButton(typeTitle)

    } 

    return ( 
        <div className="MBTIButton cursor-pointer" onClick={handleClick}>

            <p className="MBTIButtonTitle"> {typeTitle} </p>

        </div>
    )

}

export default MBTIButton ;