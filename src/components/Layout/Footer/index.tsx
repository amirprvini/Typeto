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
        <div className="footer my-4 pt-4 pb-8">

        <div className="footerWrapper w-[95%] sm:w-4/5 flex flex-col sm:flex-row justify-between">

        <div className="right w-[90%] sm:w-3/5">

            <div className="topTopics">

                <h3 className="topTopicsTitle">شاخه های برتر</h3>

                <ul className="topTopicsList">

                    {TopTopicsData.map((data)=>{
                        return <li className="topTopicItem"> <FooterButton faTitle={data.FaTitle} onClickFunction={()=>{handleFooerBtn(data.EnTitle.toLowerCase().split(" ").join(""))}} /> </li>
                    })}
                    

                </ul>
            
            </div>
            
            <div className="typetoFamily">
            
                <h3 className="typetoFamilyTitle">خانواده تایپتو</h3>

                <ul className="topTopicsList">

                    {typetoFamData.map((data)=>{
                        return <li className="typetoFamItem" key={data.EnTitle}> <FooterButton faTitle={data.FaTitle} onClickFunction={()=>{handleFooerBtn(data.EnTitle.toLowerCase().split(" ").join(""))}}/> </li>
                    })}
                    

                </ul>
            
            </div>

        </div>


        <div className="left w-full sm:w-2/5 flex justify-center flex-row sm:flex-col">

            <div className="socialMedias">

                <div className="socialMediasTitle">

                <h2 className="title">همراه ما باشید!</h2>

                </div>

                <div className="socialMediasIcons">

                    <button className="instagram cursor-pointer hover:text-red-500 "> <FaInstagram /> </button>
                    <button className="telegram cursor-pointer hover:text-blue-500 "> <FaTelegram /> </button>
                    <button className="twitter cursor-pointer hover:text-blue-500"> <FaTwitter /> </button>

                </div>

            </div>

            {/* <div className="sendEmail">

                    <div className="emailIcon"><MdEmail /></div>
                    <FormInput type="text" title="sendEmail" placeHolderStr="ایمیل خود را وارد کنید."/>
                    <button className="cnofirmButton">تایید</button>

            </div> */}

        </div>


        </div>


        </div>
    )

}

export default Footer ;