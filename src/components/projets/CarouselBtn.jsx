import { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props) => {
  const { children, ...restProps } = props

  return (
    // <button
    //   className="embla__button embla__button--prev active:text-violet-600"
    //   type="button"
    //   {...restProps}
    // >
    //   <svg className="embla__button__svg" viewBox="0 0 532 532">
    //     <path
    //       fill="currentColor"
    //       d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
    //     />
    //   </svg>
    //   {children}
    // </button>
    <button
      className="rounded-2xl px-4 bg-[#091423] text-[#E63098] cursor-pointer"
      type="button"
      {...restProps}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275t.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"/></svg>
      {children}
    </button>
  )
}

export const NextButton = (props) => {
  const { children, ...restProps } = props

  return (
    // <button
    //   className="embla__button embla__button--next active:text-violet-600"
    //   type="button"
    //   {...restProps}
    // >
    //   <svg className="embla__button__svg" viewBox="0 0 532 532">
    //     <path
    //       fill="currentColor"
    //       d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
    //     />
    //   </svg>
    //   {children}
    // </button>
    <button
      className="rounded-2xl px-4 py-1 bg-[#091423] text-[#E63098] cursor-pointer"
      type="button"
      {...restProps}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 16.3q-.2 0-.35-.137T10 15.8V8.2q0-.225.15-.362t.35-.138q.05 0 .35.15l3.625 3.625q.125.125.175.25t.05.275t-.05.275t-.175.25L10.85 16.15q-.075.075-.162.113t-.188.037" /></svg>
      {children}
    </button>
  )
}
