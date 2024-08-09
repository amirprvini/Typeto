import React from "react"
import './index.css'
import {TypesData} from './TypesData'
import TypesTags from "../../components/TypesTags";
import { famePeopleData } from "../FamousPeoplePage/famePeopleData";
import FamePeopleCard from "../../components/FamePeopleCard";
import MoreButton from "../../components/Buttons/MoreButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import FameMoreButton from "../../components/FameMoreButton";
let counter = 1 ;

interface ITypesInfoPage {

    title ?: string ;

}

const TypesInfoPage : React.FC <ITypesInfoPage> = ({title}) :JSX.Element =>{

    // const navigate = useNavigate();
    // const handleClick = ()=> {
    //     navigate("/famepeopletypes");
    // } 

    const {type} = useParams();

    return (
        <div className="typesInfoPage">
        
        <div className="content">

        {TypesData.map((data)=>{
            if(data.title === type) {
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
{/* 
                            <h4 className="sectionTitle">
                            {data.section1Title}
                            </h4> */}

                            <p className="section1Content1">
                            {data.section1Content}
                            </p>
{/* 
                            <div className="tagsWrapper">
                                <ul className="tagsList">
                                    {data.tags.map((tag)=>{
                                        return <TypesTags title={tag} />
                                    })}
                                </ul>
                            </div>

                            <p className="section1Content2">
                                {data.section1Content2}
                            </p> */}

                        </div>

                    </div>
                    

                    
                    <div className="section2Wrapper">

                        <div className="section2">

                        <h4 className="sectionTitle">
                            {data.section2Title}
                        </h4>

                        <p className="section2Content">
                            {data.section2Content}
                        </p>

                        </div>

                    </div>

                    <div className="section2Wrapper">

                        <div className="section2">

                        <h4 className="sectionTitle">
                            {data.section3Title}
                        </h4>

                        <p className="section2Content">
                            {data.section3Content}
                        </p>

                        </div>

                    </div>


                    <div className="section2Wrapper">

                        <div className="section2">

                        <h4 className="sectionTitle">
                            {data.section4Title}
                        </h4>

                        <p className="section2Content">
                            {data.section4Content}
                        </p>

                        </div>

                    </div>


                        <div className="section2Wrapper">

                        <div className="section2">

                        <h4 className="sectionTitle">
                            {data.section5Title}
                        </h4>

                        <ul className="section2Content">
                            {data.section5Content?.map((sentense)=>{
                                 return <div className="sentenseWrapper">
                                    <p className="sentence mb-2">
                                        {' - ' + sentense}
                                    </p>
                                </div>
                            })}
                        </ul>

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
                                <FameMoreButton title={type} />
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

function useParam() {
    throw new Error("Function not implemented.");
}
