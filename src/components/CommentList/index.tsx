import './index.css' ;
import React, { forwardRef, useContext, useEffect, useState } from "react";
import { AXIOS } from "../../config/axios.config";
import { CommentSection, commentType } from "../CommentSection";
import { boolean } from 'yup';
import { AppContext } from '../context/store';
import { commentProps } from '../context/types/comment.type';
let isFound = false ;

interface commentListProps extends React.PropsWithRef<any> {
    artistName : string | undefined ;
    comments ?: commentProps[] ;
    updateProp : boolean ;  
}


type artistType = {
    name:string ;
}


export const CommentList : React.FC<commentListProps> = forwardRef(({artistName,comments,updateProp},ref:any) : JSX.Element =>{


    const [state,setState] = useState<commentProps[]>();
    const [updateList , setUpdateList] = useState<boolean>();
    const {user} = useContext(AppContext);

    const handleUpdateList=()=>{
        setUpdateList(!updateList);
        // console.log("UUUUUUUUPPPPPPPPPDD: ",updateList);
    }

    useEffect(()=>{
        setState(comments);
        // console.log("glb user in comments: ",user)
    },[updateList])

    console.log('comments in list: ' , comments) ; 

    return <div className="commentListSection" >

        {<ul className="commentsList" ref={ref}>
            
            {comments?.map((comment)=>{
                return <li key={comment.id}> <CommentSection comment={comment.commentText} userName={comment.user?.username || ''} userType={comment.user?.mbtiType || ''} /> </li>
            })}  

        </ul>

        }

    </div>
    

}) 