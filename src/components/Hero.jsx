import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/slider-1.webp";
import img2 from "/slider-2.webp";
import img3 from "/slider-3.webp";
import img4 from "/slider-4.webp";
import img5 from "/slider-5.webp";
import ImageComponent from "./ImageComponent";


const Hero = () => {

  const images = [img1, img2, img3, img4]

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      slider1Ref.current.slickGoTo(0);
      slider2Ref.current.slickGoTo(0);
    }
  }, []);

  const handleNext = () => {
    slider1Ref.current?.slickNext();
    slider2Ref.current?.slickNext();
  };

  const handlePrev = () => {
    slider1Ref.current?.slickPrev();
    slider2Ref.current?.slickPrev();
  };

  const slickPrimary = {
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(.84, 0, 0.8, .99)",
    asNavFor: slider2Ref.current,
    centerMode: true,
    arrows: false,
    infinite: true,
    swipe: false,
    draggable: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '0%',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        }
      }
    ]
  };

  const slickSecondary = {
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: "cubic-bezier(.84, 0, 0.8, .99)",
    asNavFor: slider1Ref.current,
    centerMode: true,
    arrows: false,
    swipe: false,
    draggable: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '8%',
        }
      }
    ]

  };

  return (
    <div className='mt-24'>

      <div className="relative">
        {/* Text Slider */}
        <div translate="no" className="absolute z-20 w-full top-[45%] md:top-[40%] left-10 md:left-20">
          <Slider {...slickSecondary} className="h-72 BebasNeue leading-12 md:leading-14 text-[44px] md:text-5xl lg:text-6xl" ref={slider2Ref}>
            <div className="md:pl-[10%] py-8">
              <h1>SPACES WITH <br/> MEANING</h1>
            </div>
            <div className="md:pl-[10%]  py-8">
              <h1>One space <br/>One purpose</h1>
            </div>
            <div className="md:pl-[10%]  py-8">
              <h1>MORE THAN <br/> A SAPCE A VISION</h1>
            </div>
            <div className="md:pl-[10%]  py-8">
              <h1>WE DESIGN <br/> YOUR “WHY”</h1>
            </div>
          </Slider>
        </div>

        {/* Arrows */}
        <div className="absolute left-10 md:left-20 top-[70%] md:pl-[6%] -translate-y-1/2 flex gap-4 z-20 font-sans">
          <button
            className="border rounded-full p-3 cursor-pointer outline-none active:scale-95 duration-300"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6" />
            </svg>
          </button>
          <button
            className="border rounded-full p-3 cursor-pointer outline-none active:scale-95 duration-300"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Blocks */}
        <div>
          <div className="absolute z-10 h-screen w-[5%] left-[0%] bg-[#091423]"></div>
          <div className="hidden md:block absolute z-10 h-screen w-[25%] left-[25%] bg-[#091423]"></div>
          <div className="absolute z-10 h-screen w-[5%] right-[0%] bg-[#091423]"></div>
        </div>

        {/* Background Overlay */}
        {/* <div className="hidden lg:block absolute z-10 left-[5%] w-[20%] h-[80vh] bg-black/80"></div> */}
        <div className="block absolute z-10 left-[5%] w-[90%] h-[80.5vh] bg-black/15 md:w-[20%] md:h-[80vh] md:bg-black/80"></div>

        {/* Image Slider */}
        <Slider {...slickPrimary} className="w-full h-screen" ref={slider1Ref}>
          {
            images.map((el, i) => {
              return <img key={i} src={el} alt="pic" className='object-cover object-center h-[80vh]' />
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
