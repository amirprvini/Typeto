import { useState } from 'react'
import './index.css' 
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface IQuestionBoxProps extends React.PropsWithChildren {
    Qestion ?: string , 
    Answer ?: string
    iconURL ?: string 
    onclick ?: ()=> void
}

const QuestionBox : React.FC<IQuestionBoxProps>  = ({Qestion,Answer,onclick}) : JSX.Element =>{

    const [showMore, setShowMore] = useState(false);

    const handleQusetionBox = ()=>{

            // if(state==true)
            //     setState(false);
            // else

                setShowMore(!showMore);


    }

    return (
        <div className="questionBox" onClick={handleQusetionBox}>

            <div className="questionWrapper"> <div className="questionIcon"> {showMore ? <IoIosArrowDown /> : <IoIosArrowBack />} </div> <p className="questionTitle"> {Qestion} </p> </div>

            <div className="answerWrapper">
                {showMore &&  <p className="answerTitle"> {Answer} </p>} </div>

        </div>
    )

}

export default QuestionBox ;