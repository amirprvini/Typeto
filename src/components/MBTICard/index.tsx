import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css' ; 

interface IMBTICard {
    typeTitle : string ,
    faTitle ?: string ,
    description ?: string ,
    imgUrl ?: string , 
    widthProp ?: number 
}

const MBTICard : React.FC<IMBTICard> = ({typeTitle,faTitle,description,
    imgUrl}) : JSX.Element =>{
   
   const navigate = useNavigate() ; 
   
    const handleClick = ()=> {
     
        navigate("/personalitytypes/" + typeTitle)

    } 

    console.log('type title in card: ' , faTitle)

    return ( 
        <div className="mbtiCard w-[95%] cursor-pointer flex flex-col justify-start space-y-5 px-4 py-2" onClick={handleClick}>

            {/* <div className="faTitleWrapper h-1/4 flex items-start">
                <p className="faTitle">
                    {faTitle}
                </p>
            </div>
             */}
             
            {/* <div className="symbolWrapper ">
                <img src={'./images/' + typeTitle + '.png'} alt={typeTitle + '-Symbol'} width='150px' height='250px' />
            </div> */}

            <div className="EnTitleWrapper w-full h-1/4 flex justify-center">
                <p className="mbtiCard-EnTitle"> {typeTitle} </p>
            </div>

            <div className="typeDescriptionWrapper mt-auto h-[7rem] text-xl">
                <p className="typeDescription flex flex-wrap " dir='rtl'>
                    {description}
                </p>
            </div>

        </div>
    )

}

export default MBTICard ;