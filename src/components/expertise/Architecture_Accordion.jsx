import { useState } from 'react';
import mainImg from '/expertise/expertiseMain-1000.webp';
import bureau from '/bureau-2.jpg';
import concept from '/expertise/concept-1000.webp';
import mobilier from '/expertise/mobilier-1000.webp';

// Le composant AccordionItem reste INCHANGÉ
const AccordionItem = ({ title, subTitle, content, phrase, boldTitle1, subbBoldTitle1, content1, ou, boldTitle2, subbBoldTitle2, content2, objectif, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#E63098]"
      >
        <span className="font-medium">{title}</span>
        <span className={`${isOpen && 'rotate-45 duration-500 ease-in-out'} text-xl text-violet-600`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3l.053-3.053L6.018 15C4.346 15 3 13.654 3 12s1.346-3 3-3l3.053-.054L9 6.018C9 4.346 10.346 3 12 3s3 1.346 3 3l.055 2.946L18.018 9C19.654 9 21 10.346 21 12s-1.346 3-3 3l-2.945-.053L15 18.018C15 19.654 13.654 21 12 21m-1-8v5.018c0 .533.449.982 1 .982s1-.449 1-1v-5h5.018c.533 0 .982-.449.982-1s-.449-1-1-1h-5V6c0-.569-.449-1-1-1s-1 .449-1 1v5H6c-.569 0-1 .449-1 1s.449 1 1 1z" /></svg>
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
          } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-white">
          <p className="font-semibold">{subTitle}</p>
          {phrase && <p className='mt-2 underline decoration-[#E63098]'>{phrase}</p>}
          {boldTitle1 && <p className='font-bold text-xl mt-4'>{boldTitle1}</p>}
          {subbBoldTitle1 && <p className='font-bold italic mt-4'>{subbBoldTitle1}</p>}
          {content1 && <p className='whitespace-pre-line text-gray-700 my-4'>{content1}</p>}
          {ou && <p className='font-bold text-2xl text-center text-[#E63098] my-6'>{ou}</p>}
          {boldTitle2 && <p className='font-bold text-xl mt-4'>{boldTitle2}</p>}
          {subbBoldTitle2 && <p className='font-bold italic mt-4'>{subbBoldTitle2}</p>}
          {content2 && <p className='whitespace-pre-line text-gray-700 my-4'>{content2}</p>}
          {content && <p className='whitespace-pre-line text-gray-700 my-4'>{content}</p>}
          <p className='text-end font-bold italic'>{objectif}</p>
        </div>
      </div>
    </div>
  );
};


export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Concept & Architecture d’intérieur",
      suTitle: "Écouter et organiser",
      content: [
        "Chez MAI'N, nous concevons des espaces qui racontent qui vous êtes et révèlent ce que vous défendez.",
        "Nous vous écoutons, vraiment! En ouvrant un dialogue avec celles et ceux qui font votre quotidien.",
        "Nous traduisons votre Aura en concept spatial clair, où chaque élément: volumes, matières, lumière, rythme sert une intention",
        "Bien plus qu’un simple agencement, notre approche réponds aux nouveaux usages et mêle architecture d’intérieur et space planning stratégique pour révéler le potentiel de vos environnements de travail."
      ].join('\n'),
      objectif: "From inside out",
      image: concept,
      imageSrcSet: "/expertise/concept-400.webp 400w, /expertise/concept-1000.webp 1000w"
    },
    {
      title: "Accompagnement au changement",
      suTitle: "Mobiliser, impliquer, transformer",
      content: [
        "Chaque projet est une transition collective, une évolution de culture et de mindset. Nous vous aidons à porter les messages et à aligner vos actions avec le “why” profond de votre entreprise, tout en embarquant vos collaborateurs dans cette aventure.",
        "Nous impliquons vos équipes dans une réflexion commune sur leurs métiers, leur organisation et leur environnement. Comment mieux vivre et travailler ensemble ?",
        "Nous co-construisons une communication simple, authentique et engageante. Parce que le storytelling spatial est aussi important que les m².",
        "Un lieu prend tout son sens lorsque ceux qui y travaillent s’y reconnaissent."
      ].join('\n'),
      objectif: "let’s talk and move",
      image: bureau
    },
    {
      title: "Travaux & Coordination",
      suTitle: "Two Choices. One quality.",
      phrase: "Parce qu’un projet peut se piloter de plusieurs façons, on vous laisse choisir ce qui vous correspond.",
      boldTitle1: "MAI’N exécute et pilote.",
      subbBoldTitle1: "Contractant général",
      content1: [
        "Le chantier, c’est le moment où tout prend forme.",
        "On y est à vos côtés. Notre rôle est de préparer, coordonner, ajuster, rassurer.",
        "On fait le lien entre tous les corps de métier, les plans, les choix du quotidien pour que tout reste cohérent, fluide, vivant"
      ].join('\n'),
      ou: "OU",
      boldTitle2: "Vous exécutez et MAI’N pilote",
      subbBoldTitle2: "Maîtrise d’œuvre",
      content2: [
        "Vous gardez la main sur les entreprises, on orchestre avec vous.",
        "On rédige les pièces de consultation des entreprises, on accompagne le choix des prestataires, et on suit l’exécution jusqu’à la réception en passant par le transfert.",
        "On veille aux détails, on anticipe les imprévus, on garde le cap. Timing, budget, qualité"
      ].join('\n'),
      objectif: "Everything matters",
      image: mainImg,
      imageSrcSet: "/expertise/expertiseMain-400.webp 400w, /expertise/expertiseMain-1000.webp 1000w"
    },
    {
      title: "Mobilier sur mesure",
      suTitle: "Sélectionner, agencer, révéler.",
      content: [
        "Le bon mobilier ? Celui qui parle de vous, optimise l’espace et donne envie de s’y installer.",
        "Nous sélectionnons avec soin des marques de mobilier professionnel alliant design, ergonomie et durabilité.",
        "Notre force : associer esthétique, fonctionnalité et personnalisation, pour un rendu fluide, cohérent et 100 % adapté à vos usages.",
        "Espace hybride, élégant ou convivial ? Nous orchestrons la juste combinaison de pièces fortes et de détails bien pensés pour un lieu vivant, efficace et inspirant."
      ],
      image: mobilier,
      imageSrcSet: "/expertise/mobilier-400.webp 400w, /expertise/mobilier-1000.webp 1000w"
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="w-full py-6">
      <div className="w-full mx-auto">
        <div className='mb-'>
          <p className='text-2xl text-violet-600 font-bold mb-2'>All-In-One</p>
          <p className=''>Un seul interlocuteur du concept à la concrétisation.</p>
        </div>

        <div className="lg:flex items-start justify-between space-x-6 py-6">
          {/*Image */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="sticky top-24">
              <img
                src={openIndex !== null ? accordionData[openIndex].image : concept}
                srcSet={
                  openIndex !== null && accordionData[openIndex].imageSrcSet
                    ? accordionData[openIndex].imageSrcSet
                    : undefined
                }
                sizes="(max-width: 1024px) 400px, 500px"
                alt="img"
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg transition-all duration-300"
              />
            </div>
          </div>

          {/* Accordéon */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="space-y-2">
              {accordionData.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  subTitle={item.suTitle}
                  phrase={item.phrase}
                  boldTitle1={item.boldTitle1}
                  subbBoldTitle1={item.subbBoldTitle1}
                  content1={item.content1}
                  ou={item.ou}
                  boldTitle2={item.boldTitle2}
                  subbBoldTitle2={item.subbBoldTitle2}
                  content2={item.content2}
                  content={item.content}
                  objectif={item.objectif}
                  isOpen={openIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}