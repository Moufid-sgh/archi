import React from 'react'
import img1 from '/house.jpg'
import img2 from '/bureau-2.jpg'
import img3 from '/bureau-3.jpg'

const SelectedProjects = () => {

    const imgs = [img1, img2, img3]

    return (
        <div className='mt-56'>
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
                                <div className='relative rounded-2xl group-hover:scale-95 overflow-hidden duration-700 ease-out'>
                                    <img src={el} alt="img" className='h-96 w-full object-cover rounded-2xl border border-gray-300 shadow-sm group-hover:scale-115 duration-700 ease-out'
                                    />
                                    {/* redirect */}
                                    <div className='absolute top-1.5 right-1.5 p-1.5 rounded-[12px] bg-white translate-y-[-45px] group-hover:translate-y-0 ease-out delay-200 duration-500'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10m0 0v10m0-10L7 17" /></svg>
                                    </div>

                                    {/* description */}
                                    <div className='absolute left-0 right-0 bg-white rounded-[12px] border border-gray-300 shadow-sm font-semibold scale-95 py-2 px-3 translate-y-0 group-hover:translate-y-[-52px] ease-out delay-200 duration-500'>
                                        Titre
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

            <div className='text-center mt-16'>
                <button className='border rounded-3xl cursor-pointer h-10 w-36 group overflow-hidden'>
                    <div className='group-hover:-translate-y-10 duration-500 ease-in-out mt-1.5'>
                        <p>Voir plus</p>
                        <p className="bg-[#091423] text-white rounded-3xl w-full mt-1.5 py-2">Voir plus</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SelectedProjects