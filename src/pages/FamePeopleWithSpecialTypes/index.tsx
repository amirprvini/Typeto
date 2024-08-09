import FamePeopleCard from '../../components/FamePeopleCard'
import './index.css'
import { SideBar } from '../../components/Layout/SideBar'
import { famePeopleData } from '../FamousPeoplePage/famePeopleData'

interface IFamePeopleWithSpecialTypes{
    title ?: string ;
}

export const FamePeopleWithSpecialTypes : React.FC<IFamePeopleWithSpecialTypes> = ({title}) : JSX.Element =>{
    return (
        <div className="famePeopleWithTypes">
        
        <div className="content">

        <div className="titleContainer">
             <div className="titleWrapper w-[75%]">
                 <h1 className='title'> افراد معروف با تایپ شخصیتی {title} </h1> </div> </div>

        <ul className='fmaePeopleList'>
        {famePeopleData.map((data)=>{
         if(data.type===title)
         return <li key={data.name}> <FamePeopleCard charName={data.name} career={data.career} charType={data.type} charProfileUrl={data.photoUrl} /></li>
        })}    
        </ul>
            
         </div>

         </div>
    )
}