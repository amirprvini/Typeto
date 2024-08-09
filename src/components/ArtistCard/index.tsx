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
        <div className="ArtistCard cursor-pointer bg-black flex w-[98%]
        text-[1.5rem] flex-col justify-around h-85 rounded-2xl sm:w-[99%] md:w-[90%] lg:w-[85%]" onClick={onclick}>

            <div className='ArtistCardHeader h-5/6 w-full flex flex-col rounded-t-[.9rem] justify-start'>

                <div className="profileWrapper w-full flex justify-center h-3/6">

                    <div className="profile relative py-8 px-3 w-[80%] h-[150px] flex justify-center items-center"> 
                        <img src= {charProfileUrl} alt={charName + "photo"}
                        className='image absolute top-2/4 left-2/4 w-full h-auto'></img> 
                    </div>
                </div>

                <div className="charInfoWrapper w-full flex justify-center h-3/6 items-start">
                    <div className="charInfo px-2 w-full h-[8rem] flex flex-col justify-start items-start">
                        <h2 className="charName flex justify-start w-full">{charName}</h2>
                        <p className="career text-gray-400 text-base justify-self-center"> {career} </p> 
                    </div>
                </div>
        
            </div>


             <div className="charTypeWrapper w-full flex justify-center h-1/6">
                    <div className="charType flex justify-center 
                    w-full h-full items-end rounded-b-[.9rem] text-3xl rounded-tr-none"> <h3 className="charTypeTitle text-goldenrod uppercase">{charType}</h3> 
                    </div>
            </div>

        </div>
    )

}

export default ArtistCard ;