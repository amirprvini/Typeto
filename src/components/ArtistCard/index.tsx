import { useNavigate } from 'react-router-dom'
import './index.css'

interface IArtistCard {
    charType ?: string ,
    charName ?: string ,
    career ?: string ,
    charProfileUrl ?: string 
    id?:string,
    onclick ?: ()=> void
    
}


const ArtistCard : React.FC<IArtistCard> = ({charName,charType,career,charProfileUrl,id,onclick}) : JSX.Element =>{
    
    
    
    return ( 
        <div className="ArtistCard cursor-pointer" onClick={onclick}>


            <div className="charTypeWrapper">
                <div className="charType"> <h3 className="charTypeTitle">{charType}</h3> </div>
            </div>

            <div className='ArtistCardHeader'>

            <div className="charInfoWrapper">
                
                <div className="charInfo">
                <h2 className="charName">{charName}</h2>
                <p className="career"> {career} </p> 
                </div>

            </div>

             <div className="profileWrapper">
                <div className="profile"> <img src= {charProfileUrl} alt={charName + "photo"}></img> </div>
            </div>
        
            </div>

           
        </div>
    )

}

export default ArtistCard ;