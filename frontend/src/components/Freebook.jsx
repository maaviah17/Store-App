import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  Cards from "./Cards";

function Freebook(){
    const filteredData = list.filter((data)=> data.category==="Free");
    // console.log(filteredData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return (<>

        <div className="max-w-screen-2xl container mx-autp md:px-20 px-4">
            <div>
                <h1 className="font-semibold text-xl pb-2">Free Offered Course</h1>
                <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.</p>
            </div>
        
        <div> 
            <Slider {...settings} >

                {filteredData.map((item)=>(
                    <div className="hover:shadow-2xl cursor-pointer hover:bg-slate-200">
                    <Cards item={item} key={item.id}/>
                    </div>
                ))}
            </Slider>
        </div>
        </div>

    </>)
}

export default Freebook;