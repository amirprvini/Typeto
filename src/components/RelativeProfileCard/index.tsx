import { useNavigate } from 'react-router-dom'
import './index.css'

interface IRelativeProfileCard {
    charType ?: string ,
    charName ?: string ,
    career ?: string ,
    charProfileUrl ?: string 
    id?:string,
    onclick ?: ()=> void
    
}


const RelativeProfileCard : React.FC<IRelativeProfileCard> = ({charName,charType,career,charProfileUrl,id,onclick}) : JSX.Element =>{
    
    
    
    return ( 
        <div className="relativeProfileCard cursor-pointer scale-75" onClick={onclick}>
            <div className="charType"> <h3 className="RelativeProfileCard charTypeTitle">{charType}</h3> </div>
            <div className="charInfo">
             <h2 className="charName">{charName}</h2>
             <p className="career"> {career} </p> </div>
            <div className="profile"> <img src= {charProfileUrl} alt={charName + "photo"}></img> </div>
        </div>
    )

}

export default RelativeProfileCard ;