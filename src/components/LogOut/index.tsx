import React, {useContext} from 'react'
import ConfirmButton from '../ConfirmButton'
import { AppContext } from '../context/store'
import { useNavigate } from 'react-router-dom'
import { UseConfirmUserMutaion } from '../services/mutaions/useConfirmMutatioin'
import toast from 'react-hot-toast'

const LogOut : React.FC = () : JSX.Element => {

  const {user,setUser} = useContext(AppContext);
  const confirmMutate = UseConfirmUserMutaion(user?.id || '')
  const navigate = useNavigate();

    const handleClick = ()=>{
        
        localStorage.removeItem('user');
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');


        confirmMutate.mutate({

      avatar : '' , 
      username : user.username , 
      email : user.email , 
      mbtiType : user.mbtiType ,
      isAuthenticated: false ,
      phoneNumber: user.phoneNumber || '' ,
      id: user.id || '' ,   
      refresh : user.refresh || '' ,
      access : user.access || '' 

    })


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



        toast.success('شما با موفقیت از حساب کاربری خود خارج شدید.',{duration:5000})
        navigate('/home');

    }

  return <div className='LogOutWrapper h-[350px] w-full flex justify-center items-center'>

      <div className="LogOutMessageWrapper flex flex-col items-center justify-around h-3/5 w-[90%] sm:w-1/2 2xl:w-2/5 shadow-2xl px-8 py-4 bg-white rounded-2xl text-black text-lg font-semibold">
          <p className="LogOutMessage flex justify-center flex-wrap">
              آیا برای خروج از حساب کاربری خود اطمینان دارید؟
          </p>
    
          <div className="confirmBtnWrapper">
              <ConfirmButton title='تایید' typeProp={'submit'} onclick={handleClick} />
          </div>
      
      </div>

    </div>
}

export default LogOut
