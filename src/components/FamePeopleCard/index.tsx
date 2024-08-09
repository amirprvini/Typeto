import './index.css'

interface IFamePeopleCard {
    charType ?: string ,
    charName ?: string ,
    career ?: string ,
    charProfileUrl ?: string 
    id?:string,
    onclick ?: ()=> void, 
    scale ?: number , 
    scaleX ?: number , 
    scaleY ?: number , 
    
}


const FamePeopleCard : React.FC<IFamePeopleCard> = ({charName,charType,career,charProfileUrl,id,onclick,scaleX,scaleY,scale}) : JSX.Element =>{
    
    
    
    return ( 
        <div className={`famePeopleCard cursor-pointer scale-${scale}`} onClick={onclick}>
            <div className="charType"> <h3 className="charTypeTitle">{charType}</h3> </div>
            <div className="charInfo">
             <h2 className="charName">{charName}</h2>
             <p className="career"> {career} </p> </div>
            <div className="profile"> <img src= {charProfileUrl} alt={charName + "photo"}></img> </div>
        </div>
    )

}

export default FamePeopleCard ;