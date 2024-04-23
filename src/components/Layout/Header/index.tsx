import TopHeaderButton from "../../Buttons/TopHeaderButton";
import NavBar from "../../NavBar";
import "./index.css"
import { CgLogIn } from "react-icons/cg";
import { TiUserAdd } from "react-icons/ti";
import { GiBrain } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { UserProfile } from "../../Buttons/UserProfile";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/store";
import { FaRegCircleUser } from "react-icons/fa6";

interface IHeaderProps extends React.PropsWithChildren  {
    isAthenticated ?: boolean ; 
}


const Header : React.FC<IHeaderProps>  = ({isAthenticated=false}) : JSX.Element =>{

    const {user} = useContext(AppContext);

    const navigate = useNavigate();

    const handleClick = ()=>{
       
        navigate("/");
    }

    return (
        <div className="header">
            <div className="topHeader ">

                    <div className="logo cursor-pointer" onClick={handleClick} >
                        <div className="logoTitleWrapper">
                            <h1 className="logoTitle">TYPETO.NET</h1>
                            <h3 className="logoDescription">تایپتو انتخاب کن !</h3>
                            </div>
                        <div className="logoIcon">
                        <GiBrain />
                        </div>
                    </div>

                    {user?.isAuthenticated ?  <UserProfile/> : <div className="topHeaderButtonsWrapper">
                        <Link to="/signUp"> <TopHeaderButton title="ثبت نام | ورود" icon={<CgLogIn />}/> </Link>
                        {/* <Link to="/login"> <TopHeaderButton title="وارد شوید" /> </Link> */}
                    </div>}


                </div>

                <div className="navBarWrapper">
                    <NavBar/>
                </div>
        </div>
    )

}

export default Header ;