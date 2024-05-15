import React, { forwardRef } from 'react'
import { HiOutlineHome } from "react-icons/hi2";
import { GiBrain } from "react-icons/gi";
import { TbWorldHeart } from "react-icons/tb";
import { FaRegLaughSquint } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Link } from 'react-router-dom';
import NavBarButton from '../Buttons/NavBarButtons';
import { IoCloseSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import './index.css'

interface BurgurNavBarProps extends React.PropsWithRef<any> {
    isClickedProp ?: boolean ,
    handleCloseBtnProp ?: ()=> void 
}

export const BurgurNavBar : React.FC<BurgurNavBarProps> = forwardRef(({isClickedProp},ref:any) : JSX.Element => {

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


    const burgurNav = document.querySelector('.burgurNavBarWrapper') ; 

    const handleCloseBtn = ()=>{
        burgurNav?.classList.toggle('animate-closeNavBar') ;
        burgurNav?.classList.toggle('animate-openNavBar') ;
        burgurNav?.classList.toggle('hidden') ;  
    }

  return (
    <div ref={ref} className='burgurNavBarWrapper hidden  space-y-5 w-30 h-screen bg-black fixed top-0 right-0 '>

        <div className="closeNavBarWrapper py-1 px-2 text-8 w-full flex justify-end">
            <div className="closeNavBarButton" onClick={handleCloseBtn}>
                <IoIosClose />
            </div>
        </div>
      
      <ul className="burgurNavBarList flex flex-col space-y-5 w-3/4 text-2xl">
        {NavBarBtnData.map((item)=>{
            return <li className='w-full' key={item.EnTitle}>
                <Link to={"/" + item.EnTitle.toLowerCase().split(" ").join("")}> <NavBarButton faTitle={item.FaTitle} enTitle={item.EnTitle} icon={item.Icon}/> </Link>
            </li>
        })}
      </ul>

    </div>
  )
}
)
// export default BurgurNavBar
