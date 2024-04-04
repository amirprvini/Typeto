import { useContext } from 'react'
import { AddCommentSection } from '../AddCommentSection'
import { LikeAndDislike } from '../Buttons/LikeAndDislike'
import { UserProfilePhoto } from '../UserProfilePhoto'
import './index.css'
import { AppContext } from '../context/store'

interface ICommentSectionProps {
    userName ?: string ,
    userType?: string ,
    userProfilePhoto ?: string ,
    comment ?: string
}


export type commentType = {

    commentText : string ,
    id : number ,
    likeCounter : number,
    disLikeCounter : number,
    userName : string ,
    artistName : string 

}


export const CommentSection : React.FC<ICommentSectionProps> = (props) : JSX.Element =>{
    
    const user = useContext(AppContext);

    return <>
    <div className="commentSection">

                    <div className="userData">
                        
                            <div className="userProfilePhotoWrapper">
                                <UserProfilePhoto  photoUrl={props.userProfilePhoto} />
                            </div>

                            <div className='userInfo'> 
                            
                                <div className="userNameWrapper">
                                <h3 className="userName">
                                   {props.userName}
                                </h3>
                                
                            </div>

                            <div className="userTypeWrapper">
                                <p className='userType'>
                                   {props.userType}
                                </p>
                            </div>

                            </div>

                    </div>


                    <div className="userCommentWrapper">
                        <p className="userComment">
                          {props.comment}
                        </p>
                    </div>

                    <div className="likeSection">
                        <LikeAndDislike/>
                    </div>

            </div>
    </>
}
