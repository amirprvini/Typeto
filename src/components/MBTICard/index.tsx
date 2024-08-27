import React from 'react'
import './index.css' ; 

interface IMBTICard {
    typeTitle : string ,
    faTitle ?: string ,
    description ?: string ,
    imgUrl ?: string , 
    widthProp ?: string 
    onclick ?: ()=> void 
}

const MBTICard : React.FC<IMBTICard> = ({typeTitle,description,onclick,widthProp='[93%]'}) : JSX.Element =>{
   
    return ( 
        <div className={`mbtiCard w-${widthProp} mr-1 cursor-pointer flex flex-col justify-start space-y-5 px-4 py-2`} onClick={onclick}>

            {/* <div className="faTitleWrapper h-1/4 flex items-start">
                <p className="faTitle">
                    {faTitle}
                </p>
            </div> */}
            
             
            {/* <div className="symbolWrapper h-96">
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