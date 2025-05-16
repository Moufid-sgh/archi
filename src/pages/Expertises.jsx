import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
gsap.registerPlugin(SplitText);


const Expertises = () => {

  const expertisesRef = useRef(null);

  // useGSAP(() => { 
      
  //     const split = new SplitText(expertisesRef.current, { 
  //       type: "words, lines",
  //       autoSplit: true,
  //       onSplit: (self) => {
  //         return gsap.from(self.lines, {
  //           y: 100,
  //           autoAlpha: 0,
  //           stagger: 0.05
  //         });
  //       }
  //       });
  //   }
  // , { scope: expertisesRef });

  return (
    <div className='min-h-screen bg-white text-black'>
     {/* <p ref={expertisesRef} className=' pt-28 p-20 leading-8'>
      Les marques se sentent coincées dans une boucle infinie : tout semble indiquer qu'elles n'ont pas d'autre choix que de dépenser chaque année plus, sur plus de points de contact, pour être plus compétitives. Les agences, en miroir, font de leur mieux pour leur fournir toujours plus. Plus, plus, plus – alors qu'en fait, les marques peuvent dépenser plus intelligemment si elles se concentrent sur leur “truc”. Leur vérité à elle, leur raison d'être et la manière de rendre cet ADN actuel ou – comme nous aimons le dire – culturellement pertinent.
      </p>  */}
    </div>
  )
}

export default Expertises