import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/slider-1.jpg";
import img2 from "/slider-2.jpg";
import img3 from "/slider-3.jpg";
import img4 from "/slider-4.jpg";
import img5 from "/slider-5.jpg";


const Hero = () => {

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
  };

  return (
    <div className='mt-24'>
    
    <div className="relative">
      {/* Text Slider */}
      <div className="absolute z-20 w-full top-[40%]">
        <Slider {...slickSecondary} className="h-72 BebasNeue leading-14 " ref={slider2Ref}>
          <div className="text-slide">
            <h1>Ablessing for <br /> every skin</h1>
          </div>
          <div className="text-slide">
            <h1>The perfect mix <br /> of old & new</h1>
          </div>
          <div className="text-slide">
            <h1>A journey of border<br /> generations</h1>
          </div>
          <div className="text-slide">
            <h1>You are the<br /> stylist</h1>
          </div>
          <div className="text-slide">
            <h1>The fifth slide<br /> stylist</h1>
          </div>
        </Slider>

        {/* Arrows */}
        <div className="absolute left-20 top-[70%] -translate-y-1/2 flex gap-4">
          <button
            className="border rounded-full text-xl px-4 py-2 cursor-pointer outline-none"
            onClick={handleNext}
          >
            &#8592;
          </button>
          <button
            className="border rounded-full text-xl px-4 py-2 cursor-pointer outline-none"
            onClick={handlePrev}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Blocks */}
      <div className="blocks">
        <div className="absolute z-10 h-screen w-[5%] left-[0%] bg-[#091423]"></div>
        <div className="absolute z-10 h-screen w-[25%] left-[25%] bg-[#091423]"></div>
        <div className="absolute z-10 h-screen w-[5%] right-[0%] bg-[#091423]"></div>
      </div>

      {/* Background Overlay */}
      <div className="absolute z-10 left-[5%] w-[20%] h-[80vh] bg-black/80"></div>

      {/* Image Slider */}
      <Slider {...slickPrimary} className="w-full h-screen" ref={slider1Ref}>
        <img src={img1} alt="pic" className='object-cover object-center h-[80vh] w-full' />
        <img src={img2} alt="pic" className='object-cover object-center h-[80vh] w-full' />
        <img src={img3} alt="pic" className='object-cover object-center h-[80vh] w-full' />
        <img src={img4} alt="pic" className='object-cover object-center h-[80vh] w-full' />
        <img src={img5} alt="pic" className='object-cover object-center h-[80vh] w-full' />
      </Slider>
    </div>
    </div>
  );
};

export default Hero;
