import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
gsap.registerPlugin(SplitText);


function Aura() {

  const containerRef = useRef(null)
  const titleRef = useRef(null);


  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });

    // Sélectionner tous les paragraphes
    const paras = containerRef.current.querySelectorAll('.para');

    // Pour chaque paragraphe, créer un split et l'animer
    paras.forEach((para) => {
      new SplitText(para, {
        type: "lines",
        // mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return tl.from(self.lines, {
            y: 100,
            autoAlpha: 0,
            stagger: 0.03
          }, "-=0.3");
        }
      });
    });

  }, { scope: containerRef });


  return (
    <div className="min-h-screen bg-white text-black flex justify-center pt-24 px-2 pb-10">

      <section ref={containerRef} className="relative text-lg leading-10 w-full lg:w-[70%] ">


        <div className='overflow-hidden text-center py-2 mb-6 lg:mb-12'>
          <p className='para BebasNeue font-bold text-center text-6xl'>Exigeants & professionnels</p>
        </div>

        <p className='para'>
          Chez Manel Archi Immo – MAI'N, nous concevons des espaces de travail avec rigueur,intention et une réflexion profonde sur l’humain, l’espace, et leur interaction.
          Chaque projet est le fruit d’une écoute attentive, d’une analyse stratégique et d’un regard esthétique affirmé.
        </p>
        <p className="para">
          Notre approche est structurée, orientée résultats, sans jamais perdre de vue l’humain.
        </p>
        <p className='para my-6'>
          Nous imaginons des environnements pensés pour leurs usages, mais aussi pour leurs impacts : des lieux où l’on pense plus juste, où l’on ose plus grand.
        </p>
        <p className='para'>
          <span className='font-bold block'>Notre mission :</span>
          De la réflexion initiale à la livraison finale, chaque détail est maîtrisé avec exigence dans le respect des délais et des budgets.
        </p>

        {/* second part----------- */}
        <p className='para BebasNeue font-bold text-center text-6xl mt-20 lg:mt-24 mb-12'>Sensibles & alignés</p>
        <p className="para">
          Notre travail est porté par une émotion sincère et une exigence d’alignement entre fond et forme.
          Pour nous, l’espace est un lieu vivant, une extension de l’identité, porteur d’intention et de valeurs.
        </p>
        <p className="para my-6">
          Nous concevons des environnements sensibles, audacieux et stylés — pensés pour résonner avec ceux qui les habitent.
        </p>
        <p className='para'>
          Des lieux fluides, où l’esthétique sert toujours le sens.
        </p>
        <p className="para">
          Nous croyons que l’architecture intérieure a le pouvoir de transformer et d’aligner :
          aligner les personnes à leur environnement, aligner les entreprises à leur raison d’être.
        </p>
        <p className='para mt-6'>
          <span className='font-bold block'>Ce qui nous anime ?</span>
          Traduire vos convictions dans l’espace et révéler, à chaque mètre carré, l’empreinte de votre identité profonde.
        </p>

        {/* third part----------------- */}
        <p className='para BebasNeue font-bold text-center text-6xl mt-20 lg:mt-24 mb-12'>Authentiques & passionnés</p>
        <p className="para">
          MAI'N est née d’un désir clair : concevoir des espaces pensés pour l’usage, guidés par l’émotion, et portés par une vision.
        </p>
        <p className="para">
          Notre mission : révéler le why de chaque entreprise.
        </p>
        <p className="para my-6">
          Avant de penser volumes, matières ou lumière, nous cherchons le sens.
          Celui qui guide les choix, donne de la cohérence, et relie les personnes à leur environnement.
        </p>
        <p className="para">
          Nous croyons qu’un espace réussi naît toujours d’un pourquoi fort, jamais d’un effet de mode.
          Chaque entreprise a une histoire, une énergie, un souffle unique — et c’est cette essence que nous traduisons spatialement.
        </p>
        <p className="para mt-6">
          Notre vision : un design qui dépasse la forme, pour révéler ce qui vous rend unique.
        </p>
        <p className='para'>
          Des lieux qui  raconte une histoire, porte une conviction, et laisse une trace — une aura.
        </p>

        <p className="para mt-6">
          MAI'N s’engage à faire juste.
        </p>
        <p className="para">
          Juste pour vous. Juste pour eux.
        </p>
        <p className="para">
          Juste pour maintenant. Juste pour demain.
        </p>

      </section>
    </div>
  );
}

export default Aura;