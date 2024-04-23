import { useNavigate } from 'react-router-dom'
import './index.css'

interface IPersonalityTypesCard {
    typeTitle ?: string ,
    widthProp ?: number 
}


const PersonalityTypesCard : React.FC<IPersonalityTypesCard> = ({typeTitle}) : JSX.Element =>{
   
   const navigate = useNavigate() ; 
   
    const handleClick = ()=> {
     
        navigate("/personalitytypes/" + typeTitle)

    } 

    return ( 
        <div className="personalityCards cursor-pointer" onClick={handleClick}>

            <p className="personalityTitle"> {typeTitle} </p>

        </div>
    )

}

export default PersonalityTypesCard ;