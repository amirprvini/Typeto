import React from 'react'
import { BsFilterLeft } from "react-icons/bs";


interface FilterCommentsProps {
  commentCount ?: number 
  onComplete : (num:number) => void  
}

const FilterComments:React.FC<FilterCommentsProps> = ({commentCount=0 , onComplete}) : JSX.Element => {
  return (
      <div className="filterCommentsBox bg-gray-300 shadow-2xl rounded-lg py-1 px-2
      flex justify-between font-bold">

      <div className="filterWrapper flex space-x-1 items-center h-full pl-3">

          <div className="filterTitleWrapper ml-2 font-bold flex h-full gap-1 items-center">

            <div className="filterIconWrapper h-full items-center text-2xl">
              <BsFilterLeft />
            </div>

            <div className="filterTitleContainer h-full flex items-center">
              <p className='filteredByTitle font-bold w-max'>مرتب سازی: </p>
            </div>
          
          </div>


        <div className="filterItemsWrapper flex gap-6">

          <div className="newestWrapper">
            <button className="newest" onClick={()=>{onComplete(0)}}>جدیدترین</button>
          </div>

          <div className="popularWrapper">
            <button className="popular" onClick={()=>{onComplete(1)}}>محبوب ترین</button>
          </div>

          <div className="popularWrapper">
            <button className="popular" onClick={()=>{onComplete(2)}}>قدیمی ترین</button>
          </div>

          {/* <select className="select bg-gray-300 select-ghost w-full max-w-xs">
              <option onClick={()=>{onComplete(0)}}>جدیدترین</option>
              <option onClick={()=>{onComplete(0)}}>محبوب ترین</option>
              <button className="newest" onClick={()=>{onComplete(0)}}>جدیدترین</button>
          </select> */}

        </div>
        
      </div>

        
        <div className="commentsCountWrapper">
            <p className="cmCount text-lg"><span className='text-lg'>{commentCount}</span> دیدگاه</p>
        </div>
        
         

      </div>
  )
}

export default FilterComments
