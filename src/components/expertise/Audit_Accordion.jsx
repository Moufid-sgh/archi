import { useState } from 'react';

const AccordionItem = ({ title, subTitle, content, objectif, isOpen, onClick }) => {
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
            <p className="font-semibold">{subTitle}</p>
            <p className='whitespace-pre-line text-gray-700 my-4'>{content}</p>
            <p> <strong>Objectif :</strong> <span className='text-gray-700'>{objectif}</span></p>
          </div>
        </div>
      </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Audit & Vision",
      suTitle: "Analyser l’existant, révéler le potentiel",
      content: "Nous commençons chaque mission par une immersion dans vos espaces et votre culture d’entreprise pour déterminer vos objectifs et votre stratégie.",
      objectif: "poser un diagnostic clair et humanisé de la situation immobilière actuelle"
    },
    {
      title: "Études préliminaires & Simulations",
      suTitle: "Explorer les possibles",
      content: `Nous réalisons des études de faisabilité de votre projet sous tous ses angles : capacité, densité, normes, circulation, usages.
 Nous étudions plusieurs scenarii d’aménagements en phase avec vos enjeux: optimisation, regroupement, déménagement, etc.)..`,
      objectif: "construire une base claire et fiable  de réflexion technique, réglementaire et spatiale."
    },
    {
      title: "Recherche & Accompagnement",
      suTitle: "Trouver le bon lieu, au bon moment",
      content: [
        "Nous vous aidons à définir un cahier des charges clair et stratégique, puis pilotons la recherche, l’analyse et la sélection des biens.",
        "Tout au long du processus, nous vous guidons dans vos choix immobiliers selon des critères humains, opérationnels et durables."]
        .join('\n'),
      objectif: "trouver un lieu en cohérence avec vos besoins réels et votre vision d’entreprise."
    },
    {
      title: "Optimisation immobilière & Conseil stratégique",
      suTitle: "Conjuguer sens, rentabilité et efficacité",
      content: `Nous évaluons les surfaces, la rentabilité, les coûts, et les calendriers pour vous aider à prendre la bonne décision.
Une approche croisée, à 360°, pour sécuriser vos investissements et aligner vos espaces sur vos objectifs.`,
      objectif: "aider le décideur à faire des choix clairs, éclairés, et engageants."
    },
    {
      title: "Last but not least",
      suTitle: "Projection et accompagnement vers l’avant-projet",
      content: [
        "Donner forme à votre futur espace.",
        "Nous vous accompagnons dans les études d'avant-projet et la pré-programmation.",
        "Nous traduisons ensemble les idées en intentions spatiales concrètes, justes et inspirées. Vous avez la base de vos futurs aménagements."
      ].join('\n'),
      objectif: "passer d’un constat à une vision concrète et réaliste du futur lieu."
    }
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto">
       <p className='text-xl text-violet-600 font-bold mb-6'>Step by step: </p>
       
      <div className="space-y-2">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            subTitle={item.suTitle}
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