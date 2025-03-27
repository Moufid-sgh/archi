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
    <div className="App">
      <h1 ref={titleRef} className="title">
        {chars}
      </h1>
    </div>
  );
}

export default Aura;