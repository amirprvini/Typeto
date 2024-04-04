import React from "react"
import './index.css'
import {TypesData} from './TypesData'
import TypesTags from "../../components/TypesTags";
import { famePeopleData } from "../FamousPeoplePage/famePeopleData";
import FamePeopleCard from "../../components/FamePeopleCard";
import MoreButton from "../../components/Buttons/MoreButton";
import { Link, useNavigate } from "react-router-dom";
import FameMoreButton from "../../components/FameMoreButton";
let counter = 1 ;

interface ITypesInfoPage {

    title ?: string ;

}

const TypesInfoPage : React.FC <ITypesInfoPage> = ({title}) :JSX.Element =>{

    const navigate = useNavigate();
    const handleClick = ()=> {
        navigate("/famepeopletypes");
    } 

    return (
        <div className="typesInfoPage">
        
        <div className="content">

        {TypesData.map((data)=>{
            if(data.title === title) {
                return (
                   <>
                    <div className="titleWrapper"> <h1 className='title'>تایپ شخصیتی {data.title} </h1>
                    </div> 

                    <div className="subTitleWrapper">
                        <h3 className="subTitle">{data.subTitle}</h3>
                    </div>

                    <div className="content1Wrapper">
                        <p className="content1">
                            {data.content1}
                        </p>
                    </div>
                    
                    <div className="section1Wrapper">

                        <div className="section1">

                            <h4 className="sectionTitle">
                            {data.section1Title}
                            </h4>

                            <p className="section1Content1">
                            {data.section1Content1}
                            </p>

                            <div className="tagsWrapper">
                                <ul className="tagsList">
                                    {data.tags.map((tag)=>{
                                        return <TypesTags title={tag} />
                                    })}
                                </ul>
                            </div>

                            <p className="section1Content2">
                                {data.section1Content2}
                            </p>

                        </div>

                    </div>
                    

                    
                    <div className="section2Wrapper">

                        <div className="section2">

                        <h4 className="sectionTitle">
                            {data.section2Title}
                        </h4>

                        <p className="section2Content1">
                            {data.section1Content1}
                        </p>

                        <p className="section2Content2">
                            {data.section1Content2}
                        </p>
                        
                        </div>

                    </div>



                    <div className="section3Wrapper">

                        <div className="section3">

                        <h4 className="sectionTitle">
                            افراد معروف با تایپ شخصیتی {data.title}
                        </h4>

                        <div className="famePeopleWrapper">
                            
                            <ul className="famePeopleList">
                                {famePeopleData.map((fame)=>{
                                    if(fame.type === data.title && counter <= 6) {
                                        counter ++ ;
                                    return <FamePeopleCard  charName={fame.name} charType={fame.type}
                                     career={fame.career}  charProfileUrl={fame.photoUrl} />
                                    }
                                    
                                })}
                            </ul>

                            <div className="moreButtonWrapper flex justify-end mt-5 ">
                                <FameMoreButton title={title} />
                            </div>

                        </div>
                        
                        </div>

                    </div>
                    

                   </>
                )
            }
        })}


        </div>
    
    

    </div>
    )
}

export default TypesInfoPage ; 