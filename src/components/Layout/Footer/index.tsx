import "./index.css"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormInput from "../../Inputs/FormInput";
import {Link, useNavigate} from 'react-router-dom';
import FooterButton from "../../Buttons/FooterButton";

interface IFooterProps  {}

const Footer : React.FC<IFooterProps>  = () : JSX.Element =>{
    
    const navigate = useNavigate() ;
    const handleFooerBtn = (str:string)=>{
        navigate("/" + str);
        window.scrollTo(0,0) ; 
    }
     const TopTopicsData = [
        {
            FaTitle : "تایپ های شخصیتی" ,
            EnTitle : "PERSONALITY TYPES" ,
        },
        {
            FaTitle : "افراد معروف" ,
            EnTitle : "FAMOUS PEOPLE" ,
        }
    ]

    const typetoFamData = [
        {
            FaTitle : "تماس با ما" ,
            EnTitle : "CONTACT" ,
        },
    ]
  
    return (
        <div className="footer my-4 pt-4 pb-8 w-full h-max flex justify-center mt-12">

        <div className="footerWrapper w-[95%] flex sm:w-[90%] lg:w-4/5 flex-col sm:flex-row justify-between items-center">

            <div className="topTopics w-1/3 flex flex-col h-full">

                <p className="topTopicsTitle text-white font-mono ">شاخه های برتر</p>

                <ul className="topTopicsList mt-4">

                    {TopTopicsData.map((data)=>{
                        return <li className="topTopicItem space-y-4"> <FooterButton faTitle={data.FaTitle} onClickFunction={()=>{handleFooerBtn(data.EnTitle.toLowerCase().split(" ").join(""))}} /> </li>
                    })}
                    

                </ul>
            
            </div>
            
            <div className="typetoFamily w-1/3 flex flex-col h-full">
            
                <p className="typetoFamilyTitle text-white font-mono ">خانواده تایپتو</p>

                <ul className="topTopicsList w-full flex flex-col items-start gap-3 mt-4">

                    {typetoFamData.map((data)=>{
                        return <li className="typetoFamItem space-y-4" key={data.EnTitle}> <FooterButton faTitle={data.FaTitle} onClickFunction={()=>{handleFooerBtn(data.EnTitle.toLowerCase().split(" ").join(""))}}/> </li>
                    })}
                    

                </ul>
            
            </div>

            <div className="socialMedias w-1/3 h-full">

                <div className="socialMediasTitle w-full flex justify-center">

                <p className="title font-mono text-white ">همراه ما باشید!</p>

                </div>

                <div className="socialMediasIcons w-full text-white flex justify-center gap-6 text-4xl mt-6">

                    <button className="instagram cursor-pointer hover:text-red-500 "> <FaInstagram /> </button>
                    <button className="telegram cursor-pointer hover:text-blue-500 "> <FaTelegram /> </button>
                    <button className="twitter cursor-pointer hover:text-blue-500"> <FaTwitter /> </button>

                </div>

            </div>

        </div>


        </div>
    )

}

export default Footer ;