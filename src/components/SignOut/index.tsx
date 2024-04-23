import React, { useContext, useReducer, useRef } from 'react'
import './index.css'
import ConfirmButton from '../ConfirmButton'
import { AppContext } from '../context/store'
import { access } from 'fs'
import { useNavigate } from 'react-router-dom'
import CommentSectionModal from '../Modals/CommentModal'

const SignOut : React.FC = () : JSX.Element => {

  const {user,setUser} = useContext(AppContext);
  const navigate = useNavigate();
  const ref = useRef<any>() ; 

    const handleClick = ()=>{
        
        localStorage.removeItem('user');
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');


        setUser({
          avatar : '' , 
          username : '' , 
          email : '' , 
          mbtiType : '',
          isAuthenticated:false,
          phoneNumber:'', 
          id:'',
          access:'' , 
          refresh:''
        })

        navigate('/home');

    }

  return (
    <div className='signOutWrapper'>

      <div className="signOutMessageWrapper">
        <p className="signOutMessage">
            آیا برای خروج از حساب کاربری خود اطمینان دارید؟
        </p>
    
    
      <div className="confirmBtnWrapper">
        <ConfirmButton title='تایید' typeProp={'submit'} onclick={handleClick} />
      </div>
      
      </div>

    </div>
  )
}

export default SignOut
