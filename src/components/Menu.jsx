import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = ({ isOpen, setIsOpen, toggleRef }) => {

    const menuRef = useRef(null);
    //handle outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            const clickedOnHamburger = toggleRef?.contains(e.target)
            if (menuRef.current && !menuRef.current.contains(e.target) && !clickedOnHamburger) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);


    //handle menu
    const location = useLocation();
    const { pathname } = location;


    return (
        <nav ref={menuRef} className={`absolute right-0 top-0 bg-[#15161B] text-white rounded-b-lg p-6 w-full md:w-auto transition-transform duration-700 transform
                ${isOpen ? 'translate-y-0 ease-out' : '-translate-y-100 ease-in'}`}>

            <ul className='md:flex items-center mt-16 mr-20 space-x-8 Nohemi-regular tracking-wide text-2xl'>
                <li>
                    <Link
                        to="/"
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/" ? 'underline underline-offset-2 decoration-2 decoration-lime-400' : ''
                            }`}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Aura"
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/Aura" ? 'text-lime-500' : ''
                            }`}
                    >
                        Aura
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Projets"
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/Projets" ? 'text-lime-500' : ''
                            }`}
                    >
                        Projets
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Expertise"
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/Expertise" ? 'text-lime-500' : ''
                            }`}
                    >
                        Expertise
                    </Link>
                </li>
            </ul>

            <div className="mt-8 text-sm">
                <p className="mb-2 opacity-50">Socials</p>
                <ul className="flex items-center space-x-4">
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Email</li>
                </ul>
            </div>

            <div className='mt-8 text-sm'>
                EN / FR
            </div>
        </nav>
    );
};

export default Menu;