
const Footer = () => {
  return (
    <footer className='md:flex items-center justify-between border-t py-6 mx-2 lg:mx-8 space-y-8 md:space-y-0 text-base '>
        <div className='tracking-wider'>
            <p className='font-semibold'>Suivez-nous</p>
            <ul className="flex items-center space-x-4 text-sm">
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                </ul>
        </div>
        <div>
            <p className='text-xl font-bold Cropar'>Manel Archi Immo </p>
            <p className='font-sans text-sm'>©{new Date().getFullYear()} Tous droits réservés</p>
        </div>
    </footer>
  )
}

export default Footer