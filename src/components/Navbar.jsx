import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import '../index.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <nav
            //   ref={navbarRef}
            className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-transparent backdrop-blur-sm text-[#15161B] z-50"
        >
            <div className="text-xl font-bold">AMI</div>

            <div
                className="holographic-card relative flex items-center justify-center rounded-full group overflow-hidden bg-[#15161B] p-2 size-[3.5rem] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* <span className="absolute w-0 h-0 transition-[width,height] duration-500 ease-in-out bg-lime-300 rounded-full "></span> */}
                <div className={`hamburger ${isOpen ? 'is-active' : ''}`}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
