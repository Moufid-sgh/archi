import mainImg from '/projets-main.webp'

const FirstSection = () => {
    return (
        <div className='bg-white text-black min-h-screen lg:flex flex-col items-center'>

            <div className='md:flex items-center justify-between w-full mt-20 md:mt-40'>
                <div className='mb-10 md:mb-0'>
                    <h1 className="text-9xl font-semibold BebasNeue">NOS PROJETS</h1>
                    <p className='text-xl'>la phrase de manel</p>
                </div>
                <img src={mainImg} alt='img' />
            </div>

            <div className='lg:flex items-start justify-between py-20 md:py-40 px-2 lg:px-0 lg:w-2/3'>
                <p className='text-2xl font-semibold whitespace-nowrap'>We design your "why"</p>
                <p className='text-xl lg:px-20 mt-8 lg:mt-0'>
                    Chaque espace que nous concevons est une réponse sur-mesure

                    aux besoins & à la rasion d'être de chacun de nos clients.

                    Découvre nos projets vivants, porteurs de sens et de performance
                </p>
            </div>
        </div>
    )
}

export default FirstSection