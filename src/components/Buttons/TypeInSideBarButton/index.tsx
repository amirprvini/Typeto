import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

interface TypeInSideBarButtonProps {
    title : string ; 
}
const TypeInSideBarButton : React.FC<TypeInSideBarButtonProps> = ({title}) : JSX.Element => {

  const navigate = useNavigate() ; 


  const handleClick = ()=>{
    navigate(`/personalitytypes/${title}`)
  }

  return (
    <button className='typeInSideBarBtn' onClick={handleClick}> {title} </button>
  )
}

export default TypeInSideBarButton
