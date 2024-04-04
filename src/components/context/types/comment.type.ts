import { IUserState } from "./context.types";

 export interface commentProps  {
        
        id : number;
        commentText : string ;
        artistId : string ;
        user: IUserState ;
        likeCounter : number ;
        disLikeCounter : number

    }
