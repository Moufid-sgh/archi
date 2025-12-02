import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselBtn";
import useEmblaCarousel from "embla-carousel-react";

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">

      <div className="flex items-center ml-5">
        <div className="embla__buttons w-full">
          <button
            onClick={onPrevButtonClick}
            className="rounded-full p-3 flex items-end font-semibold text-4xl text-violet-600 -rotate-90 hover:text-[#E63098] active:scale-95 duration-300 cursor-pointer"
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3 3 0 0 1 0-4.242L12 1.758l7.121 7.121a3 3 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3M11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L12 4.586l-5.707 5.707a1 1 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0z" /></svg>
          </button>
          <button
            onClick={onNextButtonClick}
            className="rounded-full p-3 flex items-end font-semibold text-4xl text-violet-600 rotate-90 hover:text-[#E63098] active:scale-95 duration-300 cursor-pointer"
          >

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3 3 0 0 1 0-4.242L12 1.758l7.121 7.121a3 3 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3M11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L12 4.586l-5.707 5.707a1 1 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0z" /></svg>
          </button>
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-[400px] w-auto object-contain mx-auto cursor-grab"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
