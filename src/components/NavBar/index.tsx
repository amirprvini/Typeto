import React from 'react'
import "./index.css"
import NavBarButton from '../Buttons/NavBarButtons'
import { HiOutlineHome } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";
import { TbWorldHeart } from "react-icons/tb";
import { FaRegLaughSquint } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import SearchInput from '../Inputs/SearchInput';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ProfilePage } from '../../pages/ProfilePage';
import { UserProfile } from '../Buttons/UserProfile';


interface NavBarProps {
    isAthenticated ?: boolean
}
const NavBar : React.FC<NavBarProps> = ({isAthenticated = true}) : JSX.Element => {

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
            FaTitle : "میم ها" ,
            EnTitle : "MEMES" ,
            Icon : <FaRegLaughSquint />  
        },
        {
            FaTitle : "تماس با ما" ,
            EnTitle : "CONTACT" ,
            Icon : <GrContact /> 
        }
    ]

  return (
    <nav className="navBar">
        <div className='burgerButton'> <GiHamburgerMenu /> </div>
        <div className="navBarRight">

          <ul className="navBarItems">
         {NavBarBtnData.map((item)=>{
            
            console.log(item.EnTitle.toLowerCase().split(" ").join(""))

            return <li key={item.EnTitle}> 
                <Link to={"/" + item.EnTitle.toLowerCase().split(" ").join("")}> <NavBarButton faTitle={item.FaTitle} enTitle={item.EnTitle} icon={item.Icon}/> </Link>
            </li>

             })}

        </ul>
        
        </div>

        <div className="navBarLeft">
            <SearchInput/>
        </div>
    </nav>
  )
}

export default NavBar;