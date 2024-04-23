import React from 'react'
import './index.css' ; 


interface FilterCommentsProps {}

const FilterComments:React.FC<FilterCommentsProps> = () : JSX.Element => {
  return (
      <div className="filterComments">

        <div className="newestWrapper">
            <button className="newest">جدیدترین</button>
        </div>
        
        <div className="popularWrapper">
            <button className="popular">محبوب ترین</button>
        </div>
        
        <div className="oldestWrapper">
            <button className="oldest">قدیمی ترین</button>
        </div>
      </div>
  )
}

export default FilterComments
