import Accordion from "./Audit_Accordion"
import mainImg from '/projets-main.webp'

const Audit = () => {
  return (
    <div id="Audit">
      <p className="text-5xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 BebasNeue">AUDIT ET CONSEIL IMMOBILIER</p>
      <div className="w-full lg:flex items-start justify-between py-6">
        <Accordion />
        <img src={mainImg} alt='img' className="w-full lg:w-1/2 h-auto object-cover mt-6 lg:mt-[51px] lg:ml-6 rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default Audit