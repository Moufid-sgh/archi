import React from 'react'
import img1 from '/house.jpg'
import img2 from '/bureau-2.jpg'
import img3 from '/bureau-3.jpg'

const Projets = () => {

    const imgs = [img1, img2, img3]

    return (
        <div className='mt-52'>
            <div className="">
                <h1 className="title syne text-4xl lg:text-6xl font-bold text-center">
                    Projets
                </h1>
            </div>

            <section className='lg:flex items-center justify-between mt-24 space-y-12 lg:space-y-0'>
                {
                    imgs.map((el, index) => {
                        return (
                            <div key={index} className='relative h-[400px] w-auto group'>
                                <div className='relative rounded-2xl  group-hover:scale-95 overflow-hidden duration-700 ease-out'>
                                    <img src={el} alt="img" className='h-96 w-full object-cover rounded-2xl border border-gray-300 shadow-smgroup-hover:scale-115 duration-700 ease-out'
                                    />
                                    {/* redirect */}
                                    <div className='absolute top-1.5 right-1.5 p-1.5 rounded-[12px] bg-white translate-y-[-45px] group-hover:translate-y-0 ease-out duration-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h10m0 0v10m0-10L7 17" /></svg>
                                    </div>

                                    {/* description */}
                                    <div className='absolute left-0 right-0 bg-white rounded-[12px] border border-gray-300 shadow-sm font-semibold scale-95 py-2 px-3 translate-y-0 group-hover:translate-y-[-52px] ease-out duration-500'>
                                        Titre
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <div className='text-center mt-16'>
                <a href="#_" class="relative inline-flex items-center px-12 py-1.5 overflow-hidden  border rounded-full hover:text-white group hover:bg-gray-50">
                    <span class="absolute left-0 block w-full h-0 transition-all bg-[#091423] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">Voir plus</span>
                </a>
            </div>
        </div>
    )
}

export default Projets