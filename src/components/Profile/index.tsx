import './index.css'

interface IProfileProps {
    profileName ?: string ,
    profileCareer ?: string ,
    profileType?: string ,
    profilePhoto ?: string ,
    profileBioGraphy ?: string
}


export const Profile : React.FC<IProfileProps> = (props) : JSX.Element =>{
    
    return (    
         <div className="profileSection">

                    <div className="profileHeader">
                        
                        <div className="profileData">

                            <div className="profileNameWrapper w-[100%] flex justify-end">
                                <h2 className="profileName">
                                    {props.profileName}
                                </h2>
                            </div>

                            <div className="profileCareerWrapper w-[100%] flex justify-end">
                                <p className='profileCareer'>
                                    {props.profileCareer}
                                </p>
                            </div>

                            <div className="profileTypeWrapper w-[100%] flex justify-end">
                                <p className='profileType'>
                                  Personality Type: {props.profileType}
                                </p>
                            </div>

                        </div>

                        
                        <div className="profileImage">
                            <img src={props.profilePhoto} alt={props.profileName + "photo" } />
                        </div>

                    </div>


                    <div className="profileBiographyWrapper">
                        <p className="profileBiography">
                            {props.profileBioGraphy}
                        </p>
                    </div>

                </div>

   )
}