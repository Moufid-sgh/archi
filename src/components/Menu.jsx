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


    const handleNavigation = () => {
        setIsOpen(false);
    };


    return (
        <nav ref={menuRef}
            className={`absolute right-0 top-0 bg-[#091423] text-white rounded-b-lg border-b border-white p-6 w-full md:w-auto transition-transform duration-700 transform
                ${isOpen ? 'translate-y-0 ease-out' : '-translate-y-100 ease-in'}`}>

            <ul className=' mt-16 mr-20 space-y-2.5 tracking-wide text-2xl font-bold'>
                <li>
                    <Link
                        to="/"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/" &&  'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/aura"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/aura" && 'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Aura
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projets"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/projets" && 'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Projets
                    </Link>
                </li>
                <li>
                    <Link
                        to="/expertise"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/expertise" && 'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Expertise
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/contact" && 'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="mt-8 text-sm tracking-wide">
                <p className="mb-2 font-bold">Social</p>
                <ul className="flex items-center space-x-4">
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;