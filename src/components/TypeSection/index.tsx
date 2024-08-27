import Slider from "react-slick";
import { MBTICardType } from "../../types/mbtiCard.types";
import MBTICard from "../MBTICard";
import { useNavigate } from "react-router-dom";

interface typeSecProp {
    typeSectionTitle : string 
    types : any[]
}
const TypeSection : React.FC<typeSecProp> = ({typeSectionTitle,types}) : JSX.Element =>{


  const navigate  = useNavigate();

    var typeSettings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 4000,
    pauseOnHover: true,
    // centerMode: true,
    // centerPadding: "60px",
    // swipeToSlide: true,
    // rtl: true ,
     responsive: [
    
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  const handleClick = (type:string)=>{
        navigate("/personalitytypes/" + type);
        window.scrollTo(0,0);
  }

    const mbtiType = types.map((item:MBTICardType)=>{
          return <MBTICard typeTitle={item.type}
          faTitle={item.faTitle} description={item.description}
          onclick={()=>{handleClick(item.type)}} /> })

    return <div className="typeSection w-4/5">

        <div className="typeSecTitleWrapper text-lg sm:text-2xl lg:text-3xl">
            <h3 className="typeSecTitle font-iranyekan">{typeSectionTitle}</h3>
        </div>
        

        <div className="typesWrapper w-full mb-10">
            

            <Slider {...typeSettings}> {mbtiType} </Slider>

            {/* <ul className="diplomats-list w-full flex flex-wrap justify-center space-x-2 space-y-2">
                {types.map((item:MBTICardType)=>{
                    console.log('type: ',item)
                    return <li key={item.type} className="w-1/4">
                        <MBTICard typeTitle={item.type}
                        faTitle={item.faTitle} description={item.description} />
                    </li>
                })}
            </ul>

            <ul className="analysts-list w-full flex flex-wrap justify-center space-x-2 space-y-2">
                {types.map((item:MBTICardType)=>{
                    console.log('type: ',item)
                    return <li key={item.type} className="w-1/4">
                        <MBTICard typeTitle={item.type}
                        faTitle={item.faTitle} description={item.description} />
                    </li>
                })}
            </ul>

            <ul className="analysts-list w-full flex flex-wrap justify-center space-x-2 space-y-2">
                {types.map((item:MBTICardType)=>{
                    console.log('type: ',item)
                    return <li key={item.type} className="w-1/4">
                        <MBTICard typeTitle={item.type}
                        faTitle={item.faTitle} description={item.description} />
                    </li>
                })}
            </ul> */}

        </div>


    </div>

}


export default TypeSection ; 