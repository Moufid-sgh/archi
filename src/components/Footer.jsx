import React from 'react'

const Footer = () => {
  return (
    <footer className='lg:flex items-center justify-between border-t-2 py-6 mx-8 space-y-8 lg:space-y-0 text-base '>
        <div>
            <p className='font-semibold'>Suivez-nous</p>
            <ul className="flex items-center space-x-4 text-sm">
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                </ul>
        </div>
        <div>
            <p className='syne text-xl font-bold'>Manel Archi Immo </p>
            <p className='font-sans text-sm'>©{new Date().getFullYear()} Tous droits réservés</p>
        </div>
    </footer>
  )
}

export default Footer