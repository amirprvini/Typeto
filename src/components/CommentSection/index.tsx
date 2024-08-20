import { useContext } from 'react'
import { LikeAndDislike } from '../Buttons/LikeAndDislike'
import { UserProfilePhoto } from '../UserProfilePhoto'
import './index.css'
import { AppContext } from '../context/store'

interface ICommentSectionProps {
    userName ?: string ,
    userType?: string ,
    userAvatar ?: string ,
    commentText ?: string ,
    commentLike ?: number ,
    commentDisLike ?: number
    artistID : string
    commentID : number,
    commentDate : string , 
    likeOnComplete :(cmID:number) => void
    disLikeOnComplete :(cmID:number) => void
    likeBg : ()=> string 
    disLikeBg :()=> string 
}


export type commentType = {

    commentText : string ,
    id : number ,
    likeCounter : number,
    disLikeCounter : number,
    userName : string ,
    artistName : string 

}


export const CommentSection : React.FC<ICommentSectionProps> = ({userName='',userType,userAvatar,
    commentText,commentLike,commentDisLike,commentDate,commentID,likeOnComplete,disLikeOnComplete,likeBg,disLikeBg}):JSX.Element =>{

    const handleLikeButton = (num:number) : boolean =>{
        if(num === 0 || num % 2 === 0) 
            return true 
        else 
            return false 
    }
    
    const handleDisLikeButton = (num:number) : boolean =>{
        if(num === 0 || num % 2 === 0) 
            return true 
        else 
            return false 
    }
    
    const {updateComments ,setUpdateComments} = useContext(AppContext) ; 

    return<div className="commentSection">

                    <div className="commentSectionHeader w-full flex justify-between">
                        
                        <div className="commentDateWrapper px-1 py-2">
                            <h4 className="commentDate">
                                {commentDate}
                            </h4>
                        </div>

                        <div className="userData">
                        
                            <div className="userProfilePhotoWrapper">
                                <UserProfilePhoto  photoUrl={userAvatar} />
                            </div>

                            <div className='userInfo'> 
                            
                                <div className="userNameWrapper">
                                    <h3 className="userName">
                                        {
                                            userName?.length >= 1 ? userName : <span className='text-sm font-bold'>کاربر سایت</span>
                                        }
                                    </h3>
                                
                                </div>

                                <div className="userTypeWrapper">
                                    <p className='userType'>
                                        {userType}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="userCommentWrapper">
                        <p className="userComment">
                          {commentText}
                        </p>
                    </div>

                    <div className="likeSection">
                        <LikeAndDislike likeCount={commentLike || 0} disLikeCount={commentDisLike || 0} 
                        
                            likeComplete={(num)=>{

                                console.log("2- like state in comment section!!!!!!!!!!!!" , num)
                                console.log("2- like state  in comment section bolllllllllll" , handleLikeButton(num))
                                setUpdateComments(!updateComments);
                                likeOnComplete(commentID);
                            
                            }}

                            disLikeComplete={(num)=>{

                                console.log("2- like state in comment section!!!!!!!!!!!!" , num)
                                console.log("2- like state  in comment section bolllllllllll" , handleDisLikeButton(num))
                                setUpdateComments(!updateComments);
                                disLikeOnComplete(commentID);
                            
                            }}

                            likeColor = {likeBg() || "white"}
                            disLikeColor = {disLikeBg() || "white"}
                            
                                
                            />
                    </div>

            </div>
}
