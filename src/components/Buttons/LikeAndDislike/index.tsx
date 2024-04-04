import './index.css'
import React, { useRef, useState } from 'react'
import { AiFillLike,AiFillDislike } from "react-icons/ai";



interface CounterTracker {
  increment: number;
  decrement: number;
}


export const LikeAndDislike :React.FC = () : JSX.Element =>{

    const ref = React.useRef<CounterTracker>({
    increment: 0,
    decrement: 0,
  });

  const [likeState,setLikeState] = useState<number>();
  const [disLikeState,setDisLikeState] = useState<number>();
    
    const handleIncrement = ()=>{
        ref.current.increment += 1 ;
        setLikeState(ref.current.increment);
    }

    const handleDecrement = ()=>{
        ref.current.decrement += 1 ;
        setDisLikeState(ref.current.decrement)
    }

    return <div className="like-Dislike-Wrapper">

            <button className="disLikeWrapper">
                
                <div className="disLikeCounter"> {disLikeState} </div>
                <div className="disLikeIconWrapper " onClick={handleDecrement}>
                    <AiFillDislike  />
                </div>

            </button>

            <button className="likeWrapper">

                <div className="likeCounter"> {likeState} </div>
               
                <div className="likeIconWrapper" onClick={handleIncrement}>
                    <AiFillLike />
                </div>

            </button>

    </div>


}