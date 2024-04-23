import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

interface IMBTICard {
    typeTitle ?: string ,
    faDescription ?: string , 
    widthProp ?: number 
}


const MBTICard : React.FC<IMBTICard> = ({typeTitle,faDescription}) : JSX.Element =>{
   
   const navigate = useNavigate() ; 
   
    const handleClick = ()=> {
     
        navigate("/personalitytypes/" + typeTitle)

    } 

    return ( 
        <div className="mbtiCard cursor-pointer flex flex-col" onClick={handleClick}>

            <p className="mbtiCard-EnTitle"> {typeTitle} </p>

            <div className="typeDescriptionWrapper">
                <p className="typeDescription">
                    {faDescription}
                </p>
            </div>

        </div>
    )

}

export default MBTICard ;