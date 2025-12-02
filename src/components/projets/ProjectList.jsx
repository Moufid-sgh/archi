import { useState, useRef, useEffect, lazy, Suspense } from "react";
const Overlay = lazy(() => import("./Overlay"));
import { data } from "../../data";

const portraitClass =
  "relative overflow-hidden h-[500px] w-full md:w-[350px] lg:w-[400px] group cursor-pointer";
const landscapeClass =
  "relative overflow-hidden h-[500px] w-full md:w-[600px] lg:w-[700px] group cursor-pointer";



const ProjectList = ({ selected }) => {
  const listRef = useRef(null);

  // États pour gerer l'overlay
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtrer les projets
  const filteredProjects =
    selected === "" ? data : data.filter((p) => p.category === selected);

  // Grouper les projets par paires
  const pairs = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    pairs.push(filteredProjects.slice(i, i + 2));
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOpenOverlay = (project) => {
    setSelectedProject(project);

    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  };


  const handleCloseOverlay = () => {
    setIsOpen(false);

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
        <Suspense fallback={null}>
          <Overlay
            isOpen={isOpen}
            onClose={handleCloseOverlay}
            project={selectedProject}
          />
          /
        </Suspense>
      )}
    </>
  );
};

export default ProjectList;

