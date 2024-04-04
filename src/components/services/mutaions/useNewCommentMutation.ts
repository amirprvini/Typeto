import { useMutation } from "react-query"
import { AXIOS } from "../../../config/axios.config"
import axios from "axios"
import { ReactQueryKeys } from "../keys"
import { commentType } from "../../CommentSection";
import { artistType } from "../../AddCommentSection";


const fetcher = (data:artistType)=> axios.put(`http://localhost:3000/artists/` , data)
.then((res)=> res.data) ; 

// export const UseNewCommentMutation = ()=>{
//     return useMutation<any,any,artistType,any>(fetcher,{
//         mutationKey:[ReactQueryKeys.NewComment] 
//     })
// }


export const UseNewCommentMutation = (id:string)=>{ 
    
 return useMutation({
    mutationFn: (data:artistType)=> axios.put(`http://localhost:3000/artists/${id}` , data)
.then((res)=> res.data),
    mutationKey:ReactQueryKeys.NewComment
  })

}