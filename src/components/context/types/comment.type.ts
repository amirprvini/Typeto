import { IUserState } from "./context.types";

 export interface commentProps  {
        
        id : number;
        date : string 
        commentText : string ;
        artistId : string ;
        user: IUserState ;
        likedBy : IUserState[] ;
        disLikedBy : IUserState[] ;

    }
