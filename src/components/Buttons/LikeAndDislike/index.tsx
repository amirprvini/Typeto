import './index.css'
import React, {useState } from 'react'
import { BiLike,BiDislike ,BiSolidDislike , BiSolidLike} from "react-icons/bi";

interface LikeAndDislikeProps {
    likeCount: number ,
    disLikeCount : number , 
    likeComplete : (num:number)=>void ,
    disLikeComplete : (num:number)=>void ,
    likeColor : string ,  
    disLikeColor : string
}

export const LikeAndDislike :React.FC <LikeAndDislikeProps> = ({likeCount,disLikeCount,likeComplete,disLikeComplete,likeColor,disLikeColor}) : JSX.Element =>{

    const [likeClicked,setLikeClicked] = useState<number>(0);
    const [disLikeClicked,setDisLikeClicked] = useState<number>(0);

    const handleIncrement = ()=>{
        setLikeClicked(likeClicked => likeClicked+1)
    }

    const handledecrement = ()=>{
        setDisLikeClicked(disLikeClicked => disLikeClicked+1)
    }


    return <div className="like-Dislike-Wrapper text-black">

            <button className="disLikeWrapper"  onClick={()=>{
                     handledecrement()
                     disLikeComplete(disLikeClicked);
                }} >
                
                <div className="disLikeCounter font-bold"> {disLikeCount} </div>

                <div className={`disLikeIconWrapper`} >
                    { disLikeColor==="white" ? <BiDislike /> : <BiSolidDislike /> }
                </div>

            </button>

            <button className="likeWrapper" onClick={()=>{
                     handleIncrement();
                     likeComplete(likeClicked);
                }} >

                <div className="likeCounter font-bold"> {likeCount} </div>
               
                <div className={`likeIconWrapper`}>
                    { likeColor==="white" ? <BiLike /> : <BiSolidLike /> }
                </div>

            </button>

    </div>


}