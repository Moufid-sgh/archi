import { useState, useRef, useEffect } from "react";

import franco_suisse from "/franco_suisse/1.webp";
import urssaf_montreuil from "/urssaf_montreuil/1.webp";
import formiris from "/formiris/1.webp";
import axians_vinci from "/axians_vinci/1.webp";
import smile_to_impress from "/smile_to_impress/1.webp";
import europai from "/europai/1.webp";
import Overlay from "./Overlay"; 

const portraitClass =
  "relative overflow-hidden h-[500px] w-full md:w-[350px] lg:w-[400px] group cursor-pointer";
const landscapeClass =
  "relative overflow-hidden h-[500px] w-full md:w-[600px] lg:w-[700px] group cursor-pointer";

const projects = [
  { name: "Franco suisse",
     img: franco_suisse,
      category: "Bureaux",
      location: "Antony",
      surface: "1200 m²",
      description :[
        "Dans le cadre de son expansion, Franco Suisse, acteur emblématique de l’immobilier résidentiel haut de gamme depuis 1963, a confié à MAI’N la conception et l’aménagement de ses nouveaux bureaux.",
        "Symbole d’un savoir-faire architectural à la française, Franco Suisse incarne la devise « Bâtir l’excellence », où élégance, raffinement & pérennité définissent chaque projet.",
        "Inspirée par cet Aura, MAI’N a conçu un workspace à la hauteur de cette exigence : un lieu intemporel, baigné de lumière et pensé dans le moindre détail.",
        "Un projet à l’image de Franco Suisse où l’art de bâtir rencontre l’art de travailler."
      ],
     },
  { name: "urssaf montreuil", img: urssaf_montreuil, category: "Bureaux" },
  { name: "formiris", img: formiris, category: "Bureaux" },
  { name: "axians vinci", img: axians_vinci, category: "Bureaux" },
  { name: "smile to impress", img: smile_to_impress, category: "Bureaux" },
  { name: "europai", img: europai, category: "Bureaux" },
];

const ProjectList = ({ selected }) => {
  const listRef = useRef(null);

  // États pour gérer l'overlay
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); 

  // Filtrer les projets
  const filteredProjects =
    selected === "" ? projects : projects.filter((p) => p.category === selected);

  // Grouper les projets par paires
  const pairs = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    pairs.push(filteredProjects.slice(i, i + 2));
  }

  useEffect(() => {
    if (isOpen) {
      // Bloque le scroll du body quand l'overlay est ouvert
      document.body.style.overflow = 'hidden';
    } else {
      // Réautorise le scroll quand il est fermé
      document.body.style.overflow = 'auto';
    }

    // Fonction de nettoyage pour s'assurer que le scroll est réactivé
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]); 

  // MODIFIÉ: Logique d'ouverture
  const handleOpenOverlay = (project) => {
    setSelectedProject(project); // 1. Monte le composant dans le DOM (il est encore invisible hors-écran)

    // 2. Attend un tout petit peu (10ms) pour que le navigateur enregistre l'état "fermé"
    //    puis passe 'isOpen' à true, ce qui déclenche la transition CSS.
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };

  // MODIFIÉ: Logique de fermeture
  const handleCloseOverlay = () => {
    setIsOpen(false); 

    // 2. Attend la fin de l'animation (700ms) AVANT de démonter le composant
    setTimeout(() => {
      setSelectedProject(null);
    }, 1000); 
  };

  return (
    <>
      <section
        ref={listRef}
        className="mt-12 lg:mt-16 flex flex-col gap-10 min-h-screen pb-10 relative"
      >
        {pairs.map((pair, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const firstIsPortrait = isEvenRow;
          const secondIsPortrait = !isEvenRow;

          return (
            <div
              key={rowIndex}
              className="flex flex-col md:flex-row gap-10 justify-around items-center"
            >
              {pair.map((el, idx) => {
                const isFirst = idx === 0;
                const className = isFirst
                  ? firstIsPortrait
                    ? portraitClass
                    : landscapeClass
                  : secondIsPortrait
                    ? portraitClass
                    : landscapeClass;

                return (
                  <div
                    key={el.name}
                    className={`project-card ${className}`} 
                    onClick={() => handleOpenOverlay(el)} 
                  >
                    <img
                      src={el.img}
                      alt={el.name}
                      className="w-full h-full object-cover shadow-sm group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/0 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="BebasNeue absolute bottom-4 left-4 uppercase text-white text-4xl tracking-wide group-hover:-translate-y-6 transition-transform duration-700">
                      {el.name}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>


      {selectedProject && (
      <Overlay
        isOpen={isOpen}
        onClose={handleCloseOverlay}
        project={selectedProject}
      />
      )}
    </>
  );
};

export default ProjectList;

