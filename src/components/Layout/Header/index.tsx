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
        <div className="header w-full bg-black text-black flex flex-col justify-center items-center">
            <div className="topHeader w-4/5 h-26 bg-black text-white flex justify-between items-center py-[.5rem] px-[1rem]">

                    <div className="logo cursor-pointer flex h-full" onClick={handleClick} >
                        <div className="logoTitleWrapper w-full h-full flex flex-col items-start justify-start text-[2rem]">
                            <h1 className="logoTitle font-serif">TYPETO.NET</h1>
                            <h3 className="logoDescription text-white">تایپتو انتخاب کن !</h3>
                            </div>
                        <div className="logoIcon">
                        <GiBrain />
                        </div>
                    </div>

                    {user?.isAuthenticated ?  <UserProfile/> : <div className="topHeaderButtonsWrapper w-1/3 flex items-center justify-center space-x-4 space-y-4">
                        <Link to="/signUp"> <TopHeaderButton title="ثبت نام | ورود" icon={<CgLogIn />}/> </Link>
                        {/* <Link to="/login"> <TopHeaderButton title="وارد شوید" /> </Link> */}
                    </div>}


                </div>

                <div className="navBarWrapper w-full h-24 flex justify-center items-center ">
                    <NavBar/>
                </div>
        </div>
    )

}

export default Header ;