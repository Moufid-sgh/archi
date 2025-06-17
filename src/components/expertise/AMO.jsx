import Accordion from "./AMO_Accordion"
import mainImg from '/projets-main.webp'


const AMO = () => {
    return (
        <div id="AMO" className="mt-20">
            <p className="text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-12">AMO & PROGRAMMATION</p>
            <div className="w-full lg:flex items-start justify-between py-6">
                <Accordion />
                <img src={mainImg} alt='img' className="w-full lg:w-1/2 h-auto object-cover mt-6 lg:mt-0 lg:ml-6 rounded-lg shadow-lg" />
            </div>
        </div>
    )
}

export default AMO