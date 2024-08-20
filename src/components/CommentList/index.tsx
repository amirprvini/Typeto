import './index.css' ;
import React, { forwardRef, ReactNode, useContext,useState } from "react";
import { CommentSection} from "../CommentSection";
import { AppContext } from '../context/store';
import { commentProps } from '../context/types/comment.type';
import { UseArtistQuery } from '../services/queries/useArtistQuery';
import { artistType } from '../AddCommentSection';
import FilterComments from '../FilterComments';
import { AXIOS } from '../../config/axios.config';

interface commentListProps extends React.PropsWithRef<any> {
    artistId : string ;
    comments ?: commentProps[] ;
    updateProp : boolean ;  
    onComplete : (cmID:number)=>void
}


export const CommentList : React.FC<commentListProps> = forwardRef(({artistId,comments,onComplete},ref:any) : JSX.Element =>{

    const {user} = useContext(AppContext);
    const [filterCm , setFilterCm] = useState<number>(0);
    const [likeBg,setLikeBg] = useState<string>("white")
    const [disLikeBg,setDisLikeBg] = useState<string>("white") 


    const {data} = UseArtistQuery(artistId);

    const handleCommentRequest = async (comments:commentProps[],data:artistType)=>{

        const newData = {...data,comments:[...comments]}
        await AXIOS.put(`/artists/${artistId}`,newData);

    }

    const renderSwitch = (filterCmProp:number)=>{


        console.log('filter cm in render switch: ' , filterCmProp)

        switch (filterCmProp) {

                case 0:
                comments?.sort((a,b)=>b.id - a.id).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                setLikeBg("black");
                                comment.likedBy = [...comment.likedBy,user]
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user]
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})
                                return comment
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }}  likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }}  disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li>})
                    
                    break;
            
                case 1:

                comments?.sort((a,b)=>b.likedBy.length-a.likedBy.length).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                comment.likedBy = [...comment.likedBy,user]
                                setLikeBg("black");
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user];
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li> })
                    
                    break;
            

                case 2:
                    
                comments?.sort((a,b)=>a.id - b.id).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                setLikeBg("black");
                                comment.likedBy = [...comment.likedBy,user]
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user]
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})
                                return comment
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }}  likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }}  disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li>})

                    break;
                
                    default : 
                    return <div></div>
            }

    }



    const renderFilteredComments = ()=>{
        
        if (filterCm === 1) {
            
            
                comments?.sort((a,b)=>b.likedBy.length-a.likedBy.length).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                comment.likedBy = [...comment.likedBy,user]
                                setLikeBg("black");
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user];
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li> })
                    
        }else if(filterCm === 2){

                            comments?.sort((a,b)=>a.id - b.id).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                setLikeBg("black");
                                comment.likedBy = [...comment.likedBy,user]
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user]
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})
                                return comment
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }}  likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }}  disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li>})


        }else{

            
                comments?.sort((a,b)=>b.id - a.id).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                setLikeBg("black");
                                comment.likedBy = [...comment.likedBy,user]
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user]
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})
                                return comment
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }}  likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }}  disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li>})

        }


    }

    return <div className="commentListSection" >

        <div className="filterCommentsWrapper mb-5">

           <FilterComments commentCount={data?.comments?.length || 0} 
            onComplete={(num)=>{setFilterCm(num)}}/>  

        </div>

        <ul className="commentsList flex items" ref={ref}>

            {

            (filterCm === 0) ? comments?.sort((a,b)=>b.id - a.id).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                setLikeBg("black");
                                comment.likedBy = [...comment.likedBy,user]
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user]
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})
                                return comment
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }}  likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }}  disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li>}) : comments?.sort((a,b)=>b.likedBy.length-a.likedBy.length).map((comment)=>{

                return <li key={comment.id}> <CommentSection commentText={comment.commentText} commentLike={comment.likedBy.length} commentDisLike={comment.disLikedBy.length} 
                artistID={artistId} userName={comment.user?.username || ''}
                userType={comment.user?.mbtiType || ''} commentID={comment.id} commentDate={comment.date}
                likeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.likedBy.length >=1){

                        comment.likedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmLike = comment.likedBy.filter((commentLikedBy)=>{
                                    return commentLikedBy.id !== user.id
                                })

                                setLikeBg("white");
                                comment.likedBy = [...RemoveCmLike] ;
                                return comment.likedBy

                            }else{
                                comment.likedBy = [...comment.likedBy,user]
                                setLikeBg("black");
                                return comment.likedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.likedBy.push(user) ;
                            setLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} 

                disLikeOnComplete={(cmID)=>{
                    
                    const newCm = comments?.map((comment)=>{

                        if(comment.id === cmID){

                        if(comment.disLikedBy.length >=1){

                        comment.disLikedBy.map((cmLike)=>{
                            if(cmLike.id === user.id){
                                const RemoveCmDisLike = comment.disLikedBy.filter((commentDisLikedBy)=>{
                                    return commentDisLikedBy.id !== user.id
                                })

                                setDisLikeBg("white");
                                comment.disLikedBy = [...RemoveCmDisLike] ;
                                return comment.disLikedBy

                            }else{
                                comment.disLikedBy = [...comment.disLikedBy,user];
                                setDisLikeBg("black");
                                return comment.disLikedBy    
                            }})

                                return comment
                    
                            } else{

                            comment.disLikedBy.push(user);
                            setDisLikeBg("black");
                            return comment
                    }
                        
                        } else {
                            return comment ; 
                        }
                    })


                    handleCommentRequest(newCm,data!);
                    onComplete(cmID) 
                    
                }} likeBg={()=>{

                    const isFound = comment.likedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} disLikeBg={()=>{

                    const isFound = comment.disLikedBy.some((found)=>{
                        return found.id === user.id
                    })

                    if(isFound)
                        return "black"
                    else
                        return "white"


                }} /> </li> })

            }

        </ul>

    </div>
    

}) 