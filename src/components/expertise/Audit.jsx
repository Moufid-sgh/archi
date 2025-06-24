import Accordion from "./Audit_Accordion"
import audit from '/expertise/audit-1000.webp'

const Audit = () => {
  return (
    <div id="Audit">
      <p className="text-5xl lg:text-6xl font-bold text-center mb-6 lg:mb-12 BebasNeue">AUDIT ET CONSEIL IMMOBILIER</p>
      <div className="w-full lg:flex items-start justify-between py-6">
        <Accordion />
        <img
          src={audit}
          srcSet="/expertise/audit-400.webp 400w, /expertise/audit-1000.webp 1000w"
          sizes="(max-width: 1024px) 400px, 500px"
          alt="img"
          className="w-full mx-auto lg:w-1/2 h-auto object-cover mt-6 lg:mt-[51px] lg:ml-6 rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Audit