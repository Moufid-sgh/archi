import { useState } from 'react';

const AccordionItem = ({ title, content, objectif, isOpen, onClick }) => {
  return (
      <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
        <button
          onClick={onClick}
          className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#E63098]"
        >
          <span className="font-medium">{title}</span>
          <span className={`${isOpen && 'rotate-45 duration-500 ease-in-out'} text-xl text-violet-600`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3l.053-3.053L6.018 15C4.346 15 3 13.654 3 12s1.346-3 3-3l3.053-.054L9 6.018C9 4.346 10.346 3 12 3s3 1.346 3 3l.055 2.946L18.018 9C19.654 9 21 10.346 21 12s-1.346 3-3 3l-2.945-.053L15 18.018C15 19.654 13.654 21 12 21m-1-8v5.018c0 .533.449.982 1 .982s1-.449 1-1v-5h5.018c.533 0 .982-.449.982-1s-.449-1-1-1h-5V6c0-.569-.449-1-1-1s-1 .449-1 1v5H6c-.569 0-1 .449-1 1s.449 1 1 1z" /></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4"/></svg> */}
          </span>
        </button>
        <div
          className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >
          <div className="px-6 py-4 bg-white">
            <p className='whitespace-pre-line text-gray-700 my-4'>{content}</p>
            <p className='italic font-bold'>{objectif}</p>
          </div>
        </div>
      </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Programmation stratégique & technique",
      content: [
        "Nous cadrons votre projet avec une vision claire et actionable, en intégrant vos enjeux business, vos besoins terrain et vos contraintes techniques.",
        " Un programme sur-mesure, à la croisée du fonctionnel, de l’architectural et de l’opérationnel.",
      ].join('\n'),
      objectif: "With purpose, from strategic vision to technical reality."
    },
    {
      title: "Schéma directeur immobilier",
      content: [
        "Nous vous aidons à poser un real estate masterplan : une vision globale et évolutive de vos sites, pour piloter vos décisions avec cohérence.",
        "Optimisation des surfaces, projection des besoins, phasage dans le temps.",
      ].join('\n'),
      objectif: "Think long-term, plan smart, act with confidence."
    },
    {
      title: "Support MOA & MOE",
      content: [
        "Nous faisons le lien entre vision et exécution, en accompagnant le maître d’ouvrage et les équipes projet.",
        "Suivi des études, arbitrages, budget, planning . Nous sommes là pour que ça deliver juste et bien.",
      ].join('\n'),
      objectif: "From idea to delivery, we’ve got your back."
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto">
       
      <div className="space-y-2">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            objectif={item.objectif}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}