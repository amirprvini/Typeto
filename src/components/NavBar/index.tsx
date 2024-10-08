import React, { useContext, useRef, useState } from 'react'
import "./index.css"
import NavBarButton from '../Buttons/NavBarButtons'
import { HiOutlineHome } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";
import { TbWorldHeart } from "react-icons/tb";
import { GrContact } from "react-icons/gr";
import SearchInput from '../Inputs/SearchInput';
import { Link, useNavigate} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { UserProfile } from '../Buttons/UserProfile';
import { createPortal } from 'react-dom';
import { BurgurNavBar } from '../BurgurNavBar';
import SearchResults from '../SearchResults';
import { artistType } from '../AddCommentSection';
import TopHeaderButton from '../Buttons/TopHeaderButton';
import { AppContext } from '../context/store';
import { CgLogIn } from "react-icons/cg";




interface NavBarProps {
    isAthenticated ?: boolean
}
const NavBar : React.FC<NavBarProps> = ({isAthenticated = true}) : JSX.Element => {

    
    const {user} = useContext(AppContext);
    const [result,setResult] = useState<artistType[]>([]) ; 
    const [inputState,setInputState] = useState<string>("") ; 
    const [mouseDown,setMouseDown] = useState<boolean>(false) ;
    const [display,setDisplay] = useState<string>("");

    const inputRef = useRef<any>(null) ; 
    const ref = useRef<any>(null) ;

    const NavBarBtnData = [
        {
            FaTitle : "خانه" ,
            EnTitle : "HOME" ,
            Icon : <HiOutlineHome /> 
        },
        {
            FaTitle : "تایپ های شخصیتی" ,
            EnTitle : "PERSONALITY TYPES" ,
            Icon : <GiBrain />
        },
        {
            FaTitle : "افراد معروف" ,
            EnTitle : "FAMOUS PEOPLE" ,
            Icon : <TbWorldHeart />  
        },
        {
            FaTitle : "تماس با ما" ,
            EnTitle : "CONTACT" ,
            Icon : <GrContact /> 
        }
    ]



    const handleburgurClick = ()=>{
        ref.current.classList.toggle('animate-closeNavBar') ;
        ref.current.classList.toggle('animate-openNavBar')
        ref.current.classList.toggle('hidden')
    }


    const handleMouseDown = ()=>{
        setDisplay("") ; 
    }

    const handleMouseOut = ()=>{
        setDisplay("hidden") ; 
    }

    const navigate = useNavigate();

    const handleHeaderBtnClick = (str:string)=>{
        console.log('str' , str) ; 
        navigate(str)
        window.scrollTo(0,0);
    }


  return (
    <nav className="navBar font-iranyekan">

        <div className='burgerButton' onClick={handleburgurClick}> <GiHamburgerMenu />
        
        {createPortal(
        <BurgurNavBar ref={ref} />,
        document.body
      )}
        
        </div>
        
        <div className="navBarRight">

          <ul className="navBarItems">
         {NavBarBtnData.map((item)=>{

            return <li key={item.EnTitle}> 
                <NavBarButton faTitle={item.FaTitle} enTitle={item.EnTitle} icon={item.Icon} 
                onClickFunction = {()=>{handleHeaderBtnClick("/" + item.EnTitle.toLowerCase().split(" ").join(""))}}/>
            </li>

             })}

        </ul>
        
        </div>

        <div className="searchBarWrapper relative flex items-center justify-start space-y-10" 
        onMouseDown={handleMouseDown} onMouseLeave={handleMouseOut} >
            <SearchInput onComplete={(filteredArtists:artistType[])=>{
                setResult(filteredArtists) ;  
            }} ref={inputRef} stateProp={inputState} setStatePropFunc={(str)=>setInputState(str)}/>
            <SearchResults artistsList={result} setInpState={setInputState}
            mouseDownProp={mouseDown} displayProp={display} setDisplayProp={(str)=>{setDisplay(str)}}/>
        </div>
        
        {user?.isAuthenticated ?  <UserProfile/> : <div className="topHeaderButtonsWrapper w-1/3 flex items-center justify-center space-x-4 space-y-4">
                        <Link to="/signUp"> <TopHeaderButton title="ثبت نام | ورود" icon={<CgLogIn />} scaleProp='75'/> </Link>
                        {/* <Link to="/login"> <TopHeaderButton title="وارد شوید" /> </Link> */}
                    </div>}

    </nav>
  )
}

export default NavBar;