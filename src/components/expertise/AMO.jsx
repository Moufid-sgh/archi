import Accordion from "./AMO_Accordion"
import amo from '/expertise/amo-1000.webp';



const AMO = () => {
    return (
        <div id="AMO" className="mt-20">
            <p className="text-5xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 BebasNeue">AMO & PROGRAMMATION</p>
            <div className="w-full lg:flex items-start justify-between py-6">
                <Accordion />
                 <img
                          src={amo}
                          srcSet="/expertise/amo-400.webp 400w, /expertise/amo-1000.webp 1000w"
                          sizes="(max-width: 1024px) 400px, 500px"
                          alt="img"
                          className="w-full mx-auto lg:w-1/2 h-auto object-cover mt-6 lg:mt-[88px] lg:ml-6 rounded-lg shadow-lg"
                        />
            </div>
        </div>
    )
}

export default AMO