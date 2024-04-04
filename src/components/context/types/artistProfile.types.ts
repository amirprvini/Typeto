import { commentType } from "../../CommentSection"

export interface artistProfileType { 
    name: string ,
    career: string ,
    type: string ,
    photoUrl: string ,
    bioGraphy: string ,  
    id : string 
    comments: commentType[]
}