import "./index.css"
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormInput from "../../Inputs/FormInput";
import NavBarButton from "../../Buttons/NavBarButtons";
import { Link, useNavigate } from 'react-router-dom';
import FooterButton from "../../Buttons/FooterButton";

interface IFooterProps  {}

const Footer : React.FC<IFooterProps>  = () : JSX.Element =>{

     const TopTopicsData = [
        {
            FaTitle : "تایپ های شخصیتی" ,
            EnTitle : "PERSONALITY TYPES" ,
        },
        {
            FaTitle : "افراد معروف" ,
            EnTitle : "FAMOUS PEOPLE" ,
        },
        {
            FaTitle : "میم ها" ,
            EnTitle : "MEMES" ,
        },
    ]

    const typetoFamData = [
        {
            FaTitle : "تماس با ما" ,
            EnTitle : "CONTACT" ,
        },
    ]

    return (
        <div className="footer">

        <div className="footerWrapper">

        <div className="right">

            <div className="topTopics">

                <h3 className="topTopicsTitle">شاخه های برتر</h3>

                <ul className="topTopicsList">

                    {TopTopicsData.map((data)=>{
                        return <Link to={"/" + data.EnTitle.toLowerCase().split(" ").join("")}>  
                        <li className="topTopicItem"> <FooterButton faTitle={data.FaTitle} /> </li> </Link>
                    })}
                    

                </ul>
            
            </div>
            
            <div className="typetoFamily">
            
                <h3 className="typetoFamilyTitle">خانواده تایپتو</h3>

                <ul className="topTopicsList">

                    {typetoFamData.map((data)=>{
                        return <Link to={"/" + data.EnTitle.toLowerCase().split(" ").join("")}>  
                        <li className="typetoFamItem" key={data.EnTitle}> <FooterButton faTitle={data.FaTitle} /> </li> </Link>
                    })}
                    

                </ul>
            
            </div>

        </div>


        <div className="left">

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

            <div className="sendEmail">

                    <div className="emailIcon"><MdEmail /></div>
                    <FormInput type="text" title="sendEmail" placeHolderStr="ایمیل خود را وارد کنید."/>
                    <button className="cnofirmButton">تایید</button>

                </div>

        </div>


        </div>


        </div>
    )

}

export default Footer ;