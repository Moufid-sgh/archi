
import { useEffect, useState } from "react"

const GoToTopBtn = () => {

  const [showBtn, setshowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])



  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {
        showBtn &&
        <button
          onClick={handleGoToTop}
          className="fixed bottom-16 lg:bottom-28 right-4 z-50 bg-[#091423] border border-white shadow-lg rounded-full p-3 flex items-end font-semibold text-4xl hover:text-[#E63098] hover:border-[#E63098] active:scale-95 duration-300 cursor-pointer"
        >

          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3 3 0 0 1 0-4.242L12 1.758l7.121 7.121a3 3 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3M11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L12 4.586l-5.707 5.707a1 1 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0z" /></svg>
        </button>

      }
    </>
  )
}

export default GoToTopBtn