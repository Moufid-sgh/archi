import mainImg from '/projets-main.webp'

const Architecture = () => {



  return (
    <div id="Architecture" className="mt-20">
      <p className="text-3xl lg:text-4xl  font-bold text-center mb-6 lg:mb-12">ARCHITECTURE D'INTÉRIEUR</p>

      {/* Concept & Architecture d’intérieur---------------------------------------------------------------- */}
      <div className="w-full ">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Concept & Architecture d’intérieur</h2>
              <p className="text-lg mb-2 italic">Écouter et organiser</p>
              <div className="space-y-2 text-gray-700">
                <p>
                  Chez MAI'N, nous concevons des espaces qui racontent qui vous êtes et révèlent ce que vous défendez.
                </p>
                <p>
                  Nous vous écoutons, vraiment! En ouvrant un dialogue avec celles et ceux qui font votre quotidien.
                </p>
                <p>
                  Nous traduisons votre Aura en concept spatial clair, où chaque élément: volumes, matières, lumière, rythme sert une intention
                </p>
                <p>
                  Bien plus qu’un simple agencement, notre approche réponds aux nouveaux usages et mêle architecture d’intérieur et space planning stratégique pour révéler le potentiel de vos environnements de travail.
                </p>
              </div>

              <p className="text-lg italic mt-4">From inside out</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Ateliers de co-conception</li>
                <li>Macro-zoning en fonction des usages</li>
                <li>Étude des schémas d’organisation (flex, activity based working…)</li>
                <li>Optimisation des flux et des interactions</li>
                <li>Micro-zoning adapté aux besoins de chaque équipe</li>
                <li>Conception et modélisation architecturale: Plans- Détails techniques</li>
                <li>Créer une atmosphère unique: couleurs matériaux, mobilier: Mood board - Vues 3D</li>
              </ul>
            </div>
            {/* Ligne horizontale sous le texte */}
            <div className="hidden md:block mt-6 h-[2.2px] bg-violet-600 w-full" />
          </div>

          {/* Ligne verticale entre texte et image */}
          <div className="hidden md:block w-[2.2px] mb-6 bg-violet-600" />

          {/* Image */}
          <div className="flex-1 flex flex-col justify-between items-center">
            <div className="h-full flex items-center">
              <img
                src={mainImg}
                alt="Illustration"
                className="w-full rounded shadow"
              />
            </div>
            {/* Ligne horizontale sous l'image */}
            <div className="hidden md:block h-[2px] bg-violet-600 w-full" />
          </div>
        </div>
      </div>


      {/* Accompagnement au changement ---------------------------------------------------------------- */}
      <div className="w-full py-6">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
          <div className="flex-1 lg:order-3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Accompagnement au changement </h2>
              <p className="text-lg mb-2 italic">Mobiliser, impliquer, transformer</p>
              <div className="space-y-2 text-gray-700">
                <p>
                  Chaque projet est une transition collective, une évolution de culture et de mindset. Nous vous aidons à porter les messages et à aligner vos actions avec le “why” profond de votre entreprise, tout en embarquant vos collaborateurs dans cette aventure.
                </p>
                <p>
                  Nous impliquons vos équipes dans une réflexion commune sur leurs métiers, leur organisation et leur environnement.
                  Comment mieux vivre et travailler ensemble ?
                </p>
                <p>
                  Nous co-construisons une communication simple, authentique et engageante. Parce que le storytelling spatial est aussi important que les m².
                </p>
                <p>
                  Un lieu prend tout son sens lorsque ceux qui y travaillent s’y reconnaissent.
                </p>
              </div>

              <p className="text-lg italic text-end mt-4">let’s talk and move</p>

            </div>
            {/* Ligne horizontale sous le texte */}
            <div className="hidden md:block mt-6 h-[2.2px] bg-violet-600 w-full" />
          </div>

          {/* Ligne verticale entre texte et image */}
          <div className="hidden md:block w-[2.2px] mb-6 order-2 bg-violet-600" />

          {/* Image */}
          <div className="flex-1 lg:order-1 flex flex-col justify-between items-center">
            {/* Ligne verticale entre texte et image */}
            <div className="h-full flex items-start">
              <img
                src={mainImg}
                alt="Illustration"
                className="w-full rounded shadow"
              />
            </div>
            {/* Ligne horizontale sous l'image */}
            <div className="hidden md:block h-[2px] bg-violet-600 w-full" />
          </div>
        </div>
      </div>



      {/* Travaux & Coordination---------------------------------------------------------------- */}
      <div className="w-full ">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-5">Concept & Architecture d’intérieur</h2>
              <p className="text-lg font-bold mb-2">Two Choices. One quality.</p>
              <p className="text-lg mb-5 text-gray-700">Parce qu’un projet peut se piloter de plusieurs façons, on vous laisse choisir ce qui vous correspond.</p>
              <p className="text-xl font-bold mb-2">MAI’N exécute et pilote.</p>
              <p className="text-lg font-bold italic mb-2">Contractant général</p>
              <div className="space-y-2 text-gray-700">
                <p>
                  Le chantier, c’est le moment où tout prend forme.
                </p>
                <p>
                  On y est à vos côtés. Notre rôle est de préparer, coordonner, ajuster, rassurer.
                </p>
                <p>
                  On fait le lien entre tous les corps de métier, les plans, les choix du quotidien pour que tout reste cohérent, fluide, vivant.
                </p>
                <p>
                  Bien plus qu’un simple agencement, notre approche réponds aux nouveaux usages et mêle architecture d’intérieur et space planning stratégique pour révéler le potentiel de vos environnements de travail.
                </p>
              </div>

              <p className="text-xl font-bold mt-5 mb-2">Vous exécutez et MAI’N pilote.</p>
              <p className="text-lg font-bold italic mb-2">Maîtrise d’œuvre </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  Vous gardez la main sur les entreprises, on orchestre avec vous.
                </p>
                <p>
                  On y est à vos côtés. Notre rôle est de préparer, coordonner, ajuster, rassurer.
                </p>
                <p>
                  On rédige les pièces de consultation des entreprises, on accompagne le choix des prestataires, et on suit l’exécution jusqu’à la réception en passant par le transfert.
                </p>
                <p>
                  On veille aux détails, on anticipe les imprévus, on garde le cap. Timing, budget, qualité.
                </p>
              </div>

              <p className="text-lg italic text-end mt-4">Everything matters</p>

            </div>
            {/* Ligne horizontale sous le texte */}
            <div className="hidden md:block mt-6 h-[2.2px] bg-violet-600 w-full" />
          </div>

          {/* Ligne verticale entre texte et image */}
          <div className="hidden md:block w-[2.2px] mb-6 bg-violet-600" />

          {/* Image */}
          <div className="flex-1 flex flex-col justify-between items-center">
            <div className="h-full flex items-center">
              <img
                src={mainImg}
                alt="Illustration"
                className="w-full rounded shadow"
              />
            </div>
            {/* Ligne horizontale sous l'image */}
            <div className="hidden md:block h-[2px] bg-violet-600 w-full" />
          </div>
        </div>
      </div>



      {/* Mobilier sur mesure ---------------------------------------------------------------- */}
      <div className="w-full py-6">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10">
          <div className="flex-1 lg:order-3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Mobilier sur mesure</h2>
              <p className="text-lg mb-2 italic">Sélectionner, agencer, révéler.</p>
              <strong>Le bon mobilier ? Celui qui parle de vous, optimise l’espace et donne envie de s’y installer.</strong>
              <div className="space-y-2 text-gray-700">
                <p>
                  Chez <strong>MAI'N</strong>, nous sélectionnons avec soin des marques de mobilier professionnel alliant <strong> design, ergonomie et durabilité.</strong> Notre force : associer<strong>esthétique, fonctionnalité et personnalisation </strong> , pour un rendu fluide, cohérent et 100 % adapté à vos usages.
                </p>
                <p>
                  <strong>Espace hybride, élégant ou convivial ?</strong>
                  Nous orchestrons la juste combinaison de pièces fortes et de détails bien pensés — pour un lieu vivant, efficace et inspirant.
                </p>
              </div>

            </div>
            {/* Ligne horizontale sous le texte */}
            {/* <div className="hidden md:block mt-6 h-[2.2px] bg-violet-600 w-full" /> */}
          </div>

          {/* Ligne verticale entre texte et image */}
          <div className="hidden md:block w-[2.2px]  order-2 bg-violet-600" />

          {/* Image */}
          <div className="flex-1 lg:order-1 flex flex-col justify-between items-center">
            {/* Ligne verticale entre texte et image */}
            <div className="h-full flex items-center">
              <img
                src={mainImg}
                alt="Illustration"
                className="w-full rounded shadow"
              />
            </div>
            {/* Ligne horizontale sous l'image */}
            {/* <div className="hidden md:block h-[2px] bg-violet-600 w-full" /> */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Architecture