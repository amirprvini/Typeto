import './index.css'
import { useFormik } from "formik";
import { AXIOS } from '../../config/axios.config';
import { API_URLS } from '../../constants/api.urls';
import { useEffect, useRef, useState } from 'react';
import * as yup from 'yup' ;
import axios, { Axios } from 'axios';
import { commentType } from '../CommentSection';
import { UseNewCommentMutation } from '../services/mutaions/useNewCommentMutation';
import { QueryClient } from 'react-query';
import { QueryClientStore } from '../services/queryClientStore';
import { ReactQueryKeys } from '../services/keys';
import { useParams } from 'react-router-dom';
import { IUserState } from '../context/types/context.types';
import { commentProps } from '../context/types/comment.type';
import CommentSectionModal from '../Modals/CommentModal';

interface AddCommentSectionProps {
    artist ?: artistType ; 
    user ?: IUserState;
    onclick : ()=> void;
}

export type artistType = {
    name : string ,
    faName : string , 
    id : string , 
    career : string ,
    type : string ,
    photoUrl : string ,
    bioGraphy : string , 
    comments : commentProps[]
}

export const AddCommentSection : React.FC<AddCommentSectionProps> = ({artist,user,onclick}) : JSX.Element =>{


    const ref = useRef<any>(null);
    const [state,setState] = useState<any>("");

    const param = useParams();
    const newCommnetMutation = UseNewCommentMutation(param.id || '');

   
    const formik = useFormik<commentProps>({
        
        initialValues:{
        
        id : 0,
        commentText : "",
        artistId : "",
        
        user : {
            id : '' , 
            phoneNumber : '' ,
            access : '' , 
            refresh : '' ,
            avatar : '' , 
            username : '' , 
            email : '' , 
            isAuthenticated : false , 
            mbtiType : ''
        },

        likeCounter : 0,
        disLikeCounter: 0
        
        },

        onSubmit:(data:any,{resetForm})=>{

            console.log("Data: " , data)
            console.log("Comment Text: " , data.commentText)
            // console.log("username ro pas dadammm: ", props.username)
            handleClick(data) ;  

            setTimeout(()=>{
                resetForm();
            },500)
            
        }
    })



    const handleClick = async (data:commentProps) =>{
        
        console.log("username ro pas dadammm: ", user?.username)
        console.log("handle click hastammm[Bala]")
        
        // const fetchArtists = await AXIOS.get(API_URLS.GetArtists)

        // const findArtist : artistType =  if(artist.name.split(" ").join("").toLowerCase() === artist.name.split(" ").join("").toLowerCase()){
        //         return artist ; 
        //    }

        const findArtist : artistType = artist! ; 

                data.id = Date.now();
                data.artistId = artist?.id || '' ;
                data.user = {
                    id : user?.id || '' , 
                    phoneNumber : user?.phoneNumber || '' ,
                    access : user?.access || '' , 
                    refresh : user?.refresh || '' ,
                    avatar : user?.avatar || '' , 
                    username : user?.username || '' , 
                    email : user?.email || '' , 
                    isAuthenticated : user?.isAuthenticated || false , 
                    mbtiType : user?.mbtiType || ''  
                
                };

                findArtist.comments.push(data)
               // await AXIOS.put(`/artists/${props.artistID}`,findArtist);
                console.log("handle click hastammm[Paeeeen]");

                newCommnetMutation.mutate(findArtist) ;

                // update comments list of artist in query !!!
                QueryClientStore.refetchQueries(ReactQueryKeys.GetArtists)

                console.log("invalidate kardam !!!");
                
    }


    // const handleQuery = (findArtist:artistType)=>{

    //     newCommnetMutation.mutate(findArtist) ;
        
    //     QueryClientStore.refetchQueries(ReactQueryKeys.GetArtists)
    
    //     console.log('find arist in handle query: ' , findArtist)
    
    // }


    return <div className="addCommentWrapper">
            
            <div className="commentTitleWrapper">
                <h3 className="addCommentTitle">
                    افزودن دیدگاه
                </h3>
            </div>

            <form onSubmit={formik.handleSubmit} className="commentForm">

                <textarea className='commentInput' onChange={formik.handleChange} value={formik.values.commentText} name='commentText' ref={ref}/>
                <div className="commentBtnWrapper">
                    <button className='addCommentButton' type='submit' onClick={onclick}>افزودن</button>
                </div>

            </form>
    </div>

}