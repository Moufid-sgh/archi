
const Footer = () => {
  return (
    <footer className='md:flex items-center justify-between border-t py-6 mx-2 lg:mx-8 space-y-8 md:space-y-0 z-50 text-base '>
      <div className='tracking-wider'>
        <p className='font-semibold'>Contactez-nous</p>
        <ul className="flex items-center space-x-4 text-sm">
          <li className='hover:opacity-50 duration-300 cursor-pointer'>
            <a href="https://www.linkedin.com/company/manel-archi-immo/" target="_blank" rel="noopener">
              Linkedin
            </a>
          </li>
          <li className='hover:opacity-50 duration-300 cursor-pointer'>
            <a href="https://www.instagram.com/manel_archi_immo/" target="_blank" rel="noopener">
              Instagram
            </a>
          </li>
          <li className='hover:opacity-50 duration-300 cursor-pointer'>
            <a href="https://www.facebook.com/people/Conseils-en-architecture-dint%C3%A9rieur-et-d%C3%A9coration-Paris/100063162373603/?mibextid=wwXIfr&rdid=WEljxlSsAJRVnICk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CtGNbnqXm%2F%3Fmibextid%3DwwXIfr"
              target="_blank" rel="noopener">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p translate="no" className="text-2xl font-bold Cropar tracking-wider text-white">Mai<span className="text-[#E63098]">&acute;</span>n</p>
        <p className='font-sans text-sm'>©{new Date().getFullYear()} Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer