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
        <nav ref={menuRef} className={`absolute right-0 top-0 bg-[#F788C0] text-black rounded-b-lg p-6 w-full md:w-auto transition-transform duration-700 transform
                ${isOpen ? 'translate-y-0 ease-out' : '-translate-y-100 ease-in'}`}>

            <ul className='md:flex items-center mt-16 mr-20 space-x-6 tracking-wide text-2xl font-bold'>
                <li>
                    <Link
                        to="/"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/" && 'text-white'
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
                        to="/Expertise"
                        onClick={handleNavigation}
                        className={`hover:opacity-50 duration-300 cursor-pointer ${pathname === "/expertise" && 'underline underline-offset-2 decoration-3 decoration-[#E63098]'
                            }`}
                    >
                        Expertise
                    </Link>
                </li>
            </ul>

            <div className="mt-8 text-sm tracking-wide">
                <p className="mb-2 font-bold">Contact</p>
                <ul className="flex items-center space-x-4">
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Linkedin</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Instagram</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Facebook</li>
                    <li className='hover:opacity-50 duration-300 cursor-pointer'>Email</li>
                </ul>
            </div>

            {/* <div className='flex items-center space-x-3 mt-8 text-sm'>
                FR / EN
            </div> */}
        </nav>
    );
};

export default Menu;