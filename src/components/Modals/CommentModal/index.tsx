import React, { forwardRef, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'



interface CommentSectionModalProps extends React.PropsWithRef<any> {
    
}

const CommentSectionModal : React.FC<CommentSectionModalProps> = forwardRef((props,ref:any) : JSX.Element => {
  
  const navigate = useNavigate();

  const handleClick = ()=>{
    ref.current.closeModal();
    navigate('/home')
  }

  return <dialog ref={ref} className="modal">
  <div className="modal-box">
    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
    <p className="py-4">برای افزودن دیدگاه ابتدا باید پروفایل کاربری خود را تکمیل کنید.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">بستن</button>
      </form>
    </div>
  </div>
</dialog>

})

export default CommentSectionModal
