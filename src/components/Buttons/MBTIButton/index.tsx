import { useNavigate } from 'react-router-dom'
import './index.css'

interface IMBTIButton {
    typeTitle ?: string ,
    widthProp ?: number 
}


const MBTIButton : React.FC<IMBTIButton> = ({typeTitle}) : JSX.Element =>{
   
   const navigate = useNavigate() ; 
   
    const handleClick = ()=> {
     
       // navigate("/personalitytypes/" + typeTitle)
       console.log('click shodam !!! ')

    } 

    return ( 
        <div className="MBTIButton cursor-pointer" onClick={handleClick}>

            <p className="MBTIButtonTitle"> {typeTitle} </p>

        </div>
    )

}

export default MBTIButton ;