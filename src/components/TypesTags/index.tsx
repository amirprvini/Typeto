import React from "react";
import { GiLindenLeaf } from "react-icons/gi";
import './index.css'

interface ITypesTagsProps {
    title ?: string 
}

const TypesTags : React.FC <ITypesTagsProps> = ({title}) : JSX.Element =>{

    return <div className="typesTags">
        
        <div className="tagIcon"> <GiLindenLeaf /> </div>
        <div className="tagTitle"> {title} </div>
    
    </div>
}


export default TypesTags ;