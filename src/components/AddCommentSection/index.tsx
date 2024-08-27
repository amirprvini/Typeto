import './index.css'
import { useFormik } from "formik";
import { AXIOS } from '../../config/axios.config';
import {useRef} from 'react';
import { useParams } from 'react-router-dom';
import { IUserState } from '../context/types/context.types';
import { commentProps } from '../context/types/comment.type';

interface AddCommentSectionProps {
    artist ?: artistType ; 
    user ?: IUserState;
    onclick : ()=> void;
    onComplete : (comment:commentProps,artistID:string) => void 
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

export const AddCommentSection : React.FC<AddCommentSectionProps> = ({artist,user,onclick,onComplete}) : JSX.Element =>{

    const ref = useRef<any>(null);   
    const param = useParams();
    const formik = useFormik<commentProps>({
        
        initialValues:{
        
        id : 0,
        date : "" ,
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
        likedBy : [],
        disLikedBy: []
        
        },

        onSubmit:(data:any,{resetForm})=>{
            handleClick(data) ;  
            setTimeout(()=>{
                resetForm();
            },500)
            
        }
    })



    const handleClick = async (data:commentProps) =>{
        
        const findArtist : artistType = artist! ; 

                const date = new Date() ; 

                data.id = Date.now();
                data.date = date.toLocaleDateString("fa-IR")
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
                
                data.likedBy = [] ;
                data.disLikedBy = [] ;

                console.log('1/// comment in handle click in add cm: ' , data)
                findArtist.comments.push(data)
                onComplete(data,param.id || '')
                
                await AXIOS.put(`/artists/${param.id}`,findArtist);

    }

    return <div className="addCommentWrapper">
            
            <div className="commentTitleWrapper">
                <h3 className="addCommentTitle font-iranyekan">
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