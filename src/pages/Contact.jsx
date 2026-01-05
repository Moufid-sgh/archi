import { useRef, useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Contact = () => {


    // État pour gérer les données du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // État pour gérer le statut de l'envoi 
    const [status, setStatus] = useState(null);


    // 1. Gérer les changements d'input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 2. Gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // L'URL de votre script PHP sur le serveur
        const endpoint = 'mail.php';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                // Réinitialiser le formulaire après succès
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                console.error('Erreur PHP:', data.message);
            }
        } catch (error) {
            // Erreur réseau ou CORS
            setStatus('error');
            console.error('Erreur réseau/CORS:', error);
        }
    };


    //animation for svg--------
    const desktopSvgRef = useRef(null);
    const mobileSvgRef = useRef(null);

    useGSAP(() => {
        // Desktop SVG animation
        const desktopPath = desktopSvgRef.current?.querySelector("path");
        const desktopMarker = desktopSvgRef.current?.querySelector("#SvgjsMarker1915 polygon");

        if (desktopPath && desktopMarker) {
            gsap.set(desktopPath, { drawSVG: "0%" });
            gsap.set(desktopMarker, { scale: 0, opacity: 0 });

            gsap.timeline({
                defaults: { ease: "power2.inOut" }
            })
                .to(desktopPath, {
                    drawSVG: "100%",
                    duration: 2
                })
                .to(desktopMarker, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3
                }, "-=0.3");
        }

        // Mobile SVG animation
        const mobilePath = mobileSvgRef.current?.querySelector("path");
        const mobileMarker = mobileSvgRef.current?.querySelector("#SvgjsMarker1914 polygon");

        if (mobilePath && mobileMarker) {
            gsap.set(mobilePath, { drawSVG: "0%" });
            gsap.set(mobileMarker, { scale: 0, opacity: 0 });

            gsap.timeline({
                defaults: { ease: "power2.inOut" }
            })
                .to(mobilePath, {
                    drawSVG: "100%",
                    duration: 2
                })
                .to(mobileMarker, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.3
                }, "-=0.3");
        }
    }, { scope: [desktopSvgRef, mobileSvgRef] });


    return (
        <div className='min-h-screen lg:flex items-center px-2 lg:px-8'>

            <section className='lg:w-1/2 mt-28 lg:mt-0'>
                <h1 className='text-5xl font-bold'>
                    Une belle collaboration commence ici.
                </h1>

                {/* svg for desktop--------- */}
                <svg
                    ref={desktopSvgRef}
                    className='size-48 ml-16 my-8 hidden lg:block'
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="200 200 400 400"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g strokeWidth="10" stroke="#d52c8a" fill="none" strokeLinecap="square">
                        <path
                            d="M240.5 240.5Q673.5 296.5 400 400Q49.5 523.5 559.5 559.5"
                            markerEnd="url(#SvgjsMarker1915)"
                        />
                    </g>
                    <defs>
                        <marker
                            markerWidth="4.5"
                            markerHeight="4.5"
                            refX="2.25"
                            refY="2.25"
                            viewBox="0 0 4.5 4.5"
                            orient="auto"
                            id="SvgjsMarker1915"
                        >
                            <polygon points="0,4.5 1.5,2.25 0,0 4.5,2.25" fill="#d52c8a" />
                        </marker>
                    </defs>
                </svg>

                {/* svg for mobile------------------- */}
                <svg ref={mobileSvgRef} className='size-48 ml-20 mt-4 lg:hidden' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="200 200 600 500"><g strokeWidth="10" stroke="#d52c8a" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M250 322.54331970214844Q320 -29.456680297851562 400 472.54331970214844Q507 -101.45668029785156 550 622.5433197021484 " markerEnd="url(#SvgjsMarker1914)"></path></g><defs><marker markerWidth="4.5" markerHeight="4.5" refX="2.25" refY="2.25" viewBox="0 0 4.5 4.5" orient="auto" id="SvgjsMarker1914"><polygon points="0,5 1.6666666666666667,2.5 0,0 5,2.5" fill="#d52c8a"></polygon></marker></defs></svg>

                <div className="hidden lg:block">
                    <p>Suivez-nous</p>
                    <ul className="flex items-center space-x-4">
                        <li className='hover:text-violet-600 duration-300 cursor-pointer'>
                            <a href="https://www.linkedin.com/in/manel-rachdi-30328977/" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                            </a>
                        </li>
                        <li className='hover:text-violet-600 duration-300 cursor-pointer'>
                            <a href="https://www.instagram.com/manel_archi_immo/" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.85 7.85 0 0 0-2.833 1.849A7.8 7.8 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.85 7.85 0 0 0 1.849 2.833a7.8 7.8 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.85 7.85 0 0 0 2.833-1.849a7.7 7.7 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.85 7.85 0 0 0-1.849-2.833A7.7 7.7 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0m0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a5 5 0 0 1 1.844 1.197a4.9 4.9 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.05 5.05 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787m0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333s5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333M26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917" /></svg>
                            </a>
                        </li>
                        <li className='hover:text-violet-600 duration-300 cursor-pointer'>
                            <a href="https://www.facebook.com/people/Conseils-en-architecture-dint%C3%A9rieur-et-d%C3%A9coration-Paris/100063162373603/?mibextid=wwXIfr&rdid=WEljxlSsAJRVnICk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CtGNbnqXm%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>


            <section className='lg:w-1/2 my-6 lg:my-0 lg:pl-8'>
                <p className='text-2xl font-bold'>
                    Contactez-nous
                </p>

                <form onSubmit={handleSubmit} className='flex flex-col items-center mt-4 space-y-6 text-black'>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom"
                        className='bg-white placeholder-[#091423] rounded-md p-2 w-full'
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className='bg-white placeholder-[#091423] rounded-md p-2 w-full'
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className='bg-white placeholder-[#091423] rounded-md p-2 h-36 w-full'
                        required
                    ></textarea>

                    {status === 'sending' && (
                        <p className="text-white">Envoi en cours...</p>
                    )}
                    {status === 'success' && (
                        <p className="text-violet-600 font-bold">Message envoyé avec succès !</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 font-bold">Erreur lors de l'envoi. Veuillez réessayer.</p>
                    )}

                    <button
                        type="submit"
                        className='bg-[#E63098] text-white rounded-md p-2 w-full hover:bg-violet-600 transition duration-500 cursor-pointer'
                    >
                        Envoyer
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact