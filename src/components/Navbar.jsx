import { useState, useRef } from "react";
import Menu from "./Menu";


const Navbar = () => {

    const toggleRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }


    return (
        <div className="fixed top-0 w-full flex justify-between items-center px-2 lg:px-8 py-4 bg-transparent backdrop-blur-sm z-50">

            <div className="syne text-2xl font-bold">Manel Archi Immo</div>

            {/* hamburger-menu */}
            <div
                className="relative flex items-center justify-center rounded-full group overflow-hidden bg-[#091423] p-2 size-[3.5rem] cursor-pointer
                           after:bg-[#E49366] after:z-20 after:h-full after:w-full after:rounded-full after:absolute after:top-0 after:translate-y-full hover:after:translate-y-0 after:ease-in-out after:transition-all after:duration-500
                           before:bg-[#15161B] before:z-30 before:h-full before:w-full before:rounded-full before:absolute before:top-0 before:translate-y-full hover:before:translate-y-0 before:ease-in-out before:transition-all before:duration-1000"
                onClick={handleMenu}
                ref={toggleRef}
            >

                <div className={`hamburger z-50  ${isOpen && 'is-active'}`}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>
            </div>

            {/* menu */}
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} toggleRef={toggleRef.current} />
        </div>
    );
};

export default Navbar;
