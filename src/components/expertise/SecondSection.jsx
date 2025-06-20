import AMO from "./AMO"
import Architecture from "./Architecture"
import Audit from "./Audit"
import { Link as ScrollLink } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';

const SecondSection = () => {


  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const auditSectionRef = useRef(null);

  const menuItems = [
    { id: 'Audit', label: 'Audit' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'AMO', label: 'AMO' },
  ];

  // Intersection Observer to detect visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '-100px 0px -100px 0px',
        threshold: 0.1
      }
    );

    if (auditSectionRef.current) {
      observer.observe(auditSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>
        {/* tabs */}
        <nav className={`hidden lg:block w-full max-w-md mx-auto fixed bottom-2 left-1/2 transform -translate-x-1/2 z-20
         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
         >
          <ul className="relative flex justify-between rounded-lg shadow bg-white border border-gray-300 p-1.5">
            {/* <div
              className={`absolute inset-y-1 transition-all duration-500 ease-in-out bg-white rounded-md shadow-sm 
            ${activeTab === 'Audit' ? 'left-1 w-[calc(33.33%-4px)]' : ''}
            ${activeTab === 'Architecture' ? 'left-[calc(33.33%+2px)] w-[calc(33.33%-4px)]' : ''}
            ${activeTab === 'AMO' ? 'left-[calc(66.66%+2px)] w-[calc(33.33%-4px)]' : ''}`}
            /> */}
            {menuItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveTab(item.id)}
                className={`relative w-full text-center py-2 text-sm outline-none font-medium cursor-pointer transition-colors duration-500
                 ${activeTab === item.id ? 'text-[#E63098]' : 'text-black  hover:text-gray-300'
                  }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </ul>
        </nav>

        <div ref={auditSectionRef} className=" mb-10 lg:mb-28" >
          <Audit />
          <Architecture />
          <AMO />
        </div>
      </>
  )
}

export default SecondSection