// src/App.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function Aura() {
  const titleRef = useRef(null);

  // Texte à animer
  const text = "Baseborn Studio";
  // Diviser le texte en lettres avec un index
  const chars = text.split("").map((char, index) => (
    <span
      key={index}
      className="char"
      style={{ "--char-index": index }}
    >
      {char}
    </span>
  ));

  useGSAP(() => {
    // Animation GSAP
    gsap.fromTo(
      ".char",
      {
        opacity: 0,
        y: 50, // Décalage initial vers le bas
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Masqué
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Révélé
        duration: 0.8,
        ease: "power1.out", // Courbe fluide
        stagger: 0.06, // Décalage de 65ms entre chaque lettre
      }
    );
  });

  return (
    <div className="flex justify-center mt-36 px-2 pb-10">
      {/* <h1 ref={titleRef} className="title">
        {chars}
      </h1> */}
      <section className="bg-[#E49366] font-semibold w-full lg:w-[40%] p-8 lg:p-10 space-y-4">
        <p>
        Nous pensons que le système qui régit la relation « agence-client » est totalement dépassé.
        </p>

        <p>
        Les marques se sentent coincées dans une boucle infinie : tout semble indiquer qu'elles n'ont pas d'autre choix que de dépenser chaque année plus, sur plus de points de contact, pour être plus compétitives. Les agences, en miroir, font de leur mieux pour leur fournir toujours plus...
        </p>

        <p>
        Plus, plus, plus – alors qu'en fait, les marques peuvent dépenser plus intelligemment si elles se concentrent sur leur “truc”. Leur vérité à elle, leur raison d'être et la manière de rendre cet ADN actuel ou – comme nous aimons le dire – culturellement pertinent.
        </p>

      </section>
    </div>
  );
}

export default Aura;