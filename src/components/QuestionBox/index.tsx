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
        setShowMore(!showMore);
    }

    return (
        <div className="questionBox flex flex-col gap-3 text-blac shadow-2xl rounded-lg py-4 px-3 text-base text-black bg-gray-200" onClick={handleQusetionBox}>

            <div className="questionWrapper flex font-extrabold"> <div className="questionIcon flex items-center"> {showMore ? <IoIosArrowDown /> : <IoIosArrowBack />} </div> <p className="questionTitle"> {Qestion} </p> </div>

            <div className="answerWrapper">
                {showMore &&  <p className="answerTitle"> {Answer} </p>} </div>

        </div>
    )

}

export default QuestionBox ;