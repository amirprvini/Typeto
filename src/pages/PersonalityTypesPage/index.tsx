import {useNavigate } from 'react-router-dom';
import MBTICard from '../../components/MBTICard';
import { analystsTypes, diplomatsTypes, explorersTypes, SentinelsTypes } from '../../components/TypeSection/typeSecData';



const PersonalityTypesPage : React.FC = () : JSX.Element =>{
  
    
  const navigate  = useNavigate();
  
    const mbtiTypes =  [
     {
        faTitle : 'معمار',
        type :'INTJ' , 
        description : 'اندیشمندان استراتژیک و با قوه تصور زیاد که برای هر موضوعی برنامه دارند.',
        url:'./images/INTJ.png'
    },
    {
        faTitle : 'منطق دان',
        type :'INTP' , 
        description : 'مخترعان مبتکر که هیچ وقت از دانش سیر نمی شوند',
        url : './images/INTP.png'
    },
    {
        faTitle : 'فرمانده',
        type :'ENTJ' , 
        description : 'رهبران جسور و با اراده، که همیشه یا راهی پیدا می‌کنند و یا آن را می‌سازند.',
        url : './images/ENTJ.png'
    },
    {
        faTitle : 'مناظره کننده',
        type :'ENTP' , 
        description : 'متفکرانی باهوش و کنجکاو که نمی توانند در برابر چالش فکری مقاومت کنند.',
        url : './images/ENTP.png'
    }, {
        faTitle : 'مدافع',
        type :'INFJ' , 
        description : 'آرمان گرایان آرام و عرفانی و در عین حال بسیار الهام بخش و خستگی ناپذیر.',
        url : './images/INFJ.png'
    },
    {
        faTitle : 'میانجی',
        type :'INFP' , 
        description : 'مردمی شاعر، مهربان و نوع دوست، که همیشه مشتاق ایجاد اتفاق مثبتی هستند.',
        url : './images/INFP.png'
    },
    {
        faTitle : 'قهرمان داستان',
        type :'ENFJ' , 
        description : 'رهبران کاریزما و الهام بخشی که می توانند شنوندگان خود را مسحور کنند.',
        url : './images/ENFJ.png'
    },
    {
        faTitle : 'کمپین',
        type :'ENFP' , 
        description : ' مشتاق، خلاق و اجتماعی، که همیشه می توانند دلیلی برای خندیدن پیدا کنند.',
        url : './images/ENFP.png'
    },
     {
       faTitle : 'تدارکات',
       type :'ISTJ' , 
       description : 'افراد عمل گرا و حقیقت اندیش که نمی توان در قابل اعتماد بودن آنها تردید کرد.',
       url : './images/ISTJ.png'  
    },
    {
       faTitle : 'مدافع',
       type :'ISFJ' , 
       description : 'افراد بسیار فداکار که همیشه آماده دفاع از عزیزانشان هستند.',
       url : './images/ISFJ.png' 
    },
    {
       faTitle : 'اجرایی',
       type :'ESTJ' , 
       description : 'مدیران عالی که در مدیریت افراد و موضوعات بی نظیرند.',
       url : './images/ESTJ.png' 
    },
    {
       faTitle : 'کنسول',
       type :'ESFJ' , 
       description : 'افرادی فوق العاده دلسوز، اجتماعی و محبوب، همیشه مشتاق به کمک کردن دیگران هستند.',
       url : './images/ESFJ.png' 
    },
    
    {
       faTitle : 'دارای ذوق هنری',
       type :'ISTP' , 
       description : 'آزمایشگران شجاع و عمل گرایی که در بسیاری از ابزار ها مهارت دارند.',
       url : './images/ISTP.png' 
    },
    {
       faTitle : 'ماجراجو',
       type :'ISFP' , 
       description : 'هنرمندان انعطاف پذیر و جذاب، همیشه آماده اکتشاف و تجربه چیزهای جدید هستند.',
       url : './images/ISFP.png' 
    },
    {
       faTitle : 'کارآفرین',
       type :'ESTP' , 
       description : 'افرادی باهوش، پرانرژی و بسیار فهیم که زندگی روی لبه ی تیغ (سخت) را دوست دارند.',
       url : './images/ESTP.png' 
    },
    {
       faTitle : 'سرگرم کننده',
       type :'ESFP' , 
       description : 'افراد خودجوش، پرانرژی و مشتاق که زندگی برایشان خسته کننده نمی شود.',
       url : './images/ESFP.png'  
    },
  ] ; 


  const handleClick = (type:string)=>{
        navigate("/personalitytypes/" + type);
  }


    return <div className="personalityTypesPage w-3/4">
        
        
        <div className="content w-full">


                <div className="titleContainer mb-5 "> <div className="titleWrapper w-max"> <h1 className='title'>انواع تایپ های شخصیتی</h1> </div> </div>
            
            <div className="typesListWrapper w-full flex flex-col gap-6">
                
            <div className="analystsTypesWrapper">

                <div className="analystsTitleWrapper text-white font-mono text-3xl px-10 py-5">
                    <h3 className="analystsTitle">
                        تحلیلگران
                    </h3>
                </div>

                <ul className="typesList w-full flex text-white">
            
                {analystsTypes.map((type)=>{
                    return <MBTICard typeTitle={type.type} faTitle={type.faTitle} description={type.description}
                    imgUrl={type.url} widthProp={'[25%]'} onclick={()=>{
                        handleClick(type.type)
                    }}/>
                        })}

                </ul>

            </div>

            <div className="diplomatsTypesWrapper">

                <div className="analystsTitleWrapper text-white font-mono text-3xl px-10 py-5">
                    <h3 className="analystsTitle">
                        دیپلمات
                    </h3>
                </div>

                <ul className="typesList w-full flex text-white">
            
                {diplomatsTypes.map((type)=>{
                    return <MBTICard typeTitle={type.type} faTitle={type.faTitle} description={type.description}
                    imgUrl={type.url} widthProp={'[25%]'} onclick={()=>{
                        handleClick(type.type)
                    }}/>
                        })}

                </ul>

            </div>

            <div className="analystsTypesWrapper">

                <div className="analystsTitleWrapper text-white font-mono text-3xl px-10 py-5">
                    <h3 className="analystsTitle">
                        نگهبانان
                    </h3>
                </div>

                <ul className="typesList w-full flex text-white">
            
                {SentinelsTypes.map((type)=>{
                    return <MBTICard typeTitle={type.type} faTitle={type.faTitle} description={type.description}
                    imgUrl={type.url} widthProp={'[30%]'} onclick={()=>{
                        handleClick(type.type)
                    }}/>
                        })}

                </ul>

            </div>

            <div className="analystsTypesWrapper">

                <div className="analystsTitleWrapper text-white font-mono text-3xl px-10 py-5">
                    <h3 className="analystsTitle">
                        کاشفان
                    </h3>
                </div>

                <ul className="typesList w-full flex text-white">
            
                {explorersTypes.map((type)=>{
                    return <MBTICard typeTitle={type.type} faTitle={type.faTitle} description={type.description}
                    imgUrl={type.url} widthProp={'[25%]'} onclick={()=>{
                        handleClick(type.type)
                    }}/>
                        })}

                </ul>

            </div>

            </div>
        
        </div>
    

    </div>

} 

export default PersonalityTypesPage ;