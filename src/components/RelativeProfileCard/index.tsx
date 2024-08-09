import './index.css'

interface IRelativeProfileCard {
    charType ?: string ,
    charName ?: string ,
    career ?: string ,
    charProfileUrl ?: string 
    id?:string,
    onclick ?: ()=> void
    scaleProp ?: number
    
}


const RelativeProfileCard : React.FC<IRelativeProfileCard> = ({charName,charType,career,charProfileUrl,id,scaleProp,onclick}) : JSX.Element =>{
    return ( 
        <div className={`relativeProfileCard cursor-pointer scale-${scaleProp} mb-2`} onClick={onclick}>
            <div className="charType"> <h3 className="RelativeProfileCard charTypeTitle">{charType}</h3> </div>
            <div className="charInfo">
             <h2 className="charName">{charName}</h2>
             <p className="career"> {career} </p> </div>
            <div className="profile"> <img src= {charProfileUrl} alt={charName + "photo"}></img> </div>
        </div>
    )
}

export default RelativeProfileCard ;